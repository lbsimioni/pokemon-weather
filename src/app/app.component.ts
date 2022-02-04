import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { Weather } from './models/weather.model';
import { getType, Types } from './models/types.model';
import { PokeService } from './services/poke.service';
import { Pokemon } from './models/pokemon.model';
import { Result } from './models/result.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loading: boolean = false;
  actualPokemon: Pokemon = { name: '' };
  weatherSubject: Subject<Weather> = new Subject();
  result: Result = {};

  constructor(private pokeService: PokeService) {}

  ngOnInit() {
    this.weatherSubject.subscribe((weather: Weather) => {
      if (!weather) this.updateLoading(false);

      this.updateLoading(true);

      const TYPE: Types = getType(weather);
      this.pokeService.findByType(TYPE).subscribe((response) => {
        this.actualPokemon = this.getPokemon(
          response.pokemon.map((p: any) => p.pokemon)
        );
        this.handleResult(TYPE, weather);
      });
    });
  }

  updateLoading(loading: boolean): void {
    this.loading = loading;
  }

  updateWeather(weather: Weather): void {
    this.weatherSubject.next(weather);
    this.updateLoading(true);
  }

  onError() {
    this.result = {};
  }

  getPokemon(pokemons: Pokemon[]): Pokemon {
    if (this.actualPokemon)
      pokemons = pokemons.filter((p) => p.name !== this.actualPokemon.name);

    return pokemons[this.random(pokemons.length)];
  }

  private handleResult(type: Types, weather: Weather): void {
    this.result = {
      isRaining: weather.isRaining,
      pokemonName: this.actualPokemon.name,
      pokemonType: type,
      temp: weather.temp,
    };

    this.updateLoading(false);
  }

  private random(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
