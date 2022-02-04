import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { Weather } from './models/weather.model';
import { getType, Types } from './models/types.model';
import { PokeService } from './services/poke.service';
import { Pokemon } from './models/pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loading: boolean = false;
  actualPokemon: Pokemon | null = null;
  weatherSubject: Subject<Weather> = new Subject();

  constructor(private pokeService: PokeService) {}

  ngOnInit(): void {
    this.weatherSubject.subscribe((weather: Weather) => {
      if (!weather) this.updateLoading(false);

      this.updateLoading(true);

      const type: Types = getType(weather);
      this.pokeService.findByType(type).subscribe((response) => {
        this.actualPokemon = this.getPokemon(
          response.pokemon.map((p: any) => p.pokemon)
        );
        this.updateLoading(false);
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

  getPokemon(pokemons: Pokemon[]): Pokemon {
    if (this.actualPokemon)
      pokemons = pokemons.filter((p) => p.name !== this.actualPokemon?.name);

    return pokemons[this.random(pokemons.length)];
  }

  private random(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
