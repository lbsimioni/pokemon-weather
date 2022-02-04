import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Openweathermap } from '../../models/openweathermap.model';
import { Weather } from '../../models/weather.model';
import { OpenweathermapService } from '../../services/openweathermap.service';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css'],
})
export class CityFormComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter();
  @Output() cityFound: EventEmitter<Weather> = new EventEmitter();
  @Output() onError: EventEmitter<void> = new EventEmitter();

  form: FormGroup = new FormGroup({});
  error: string = '';

  constructor(private openweatherService: OpenweathermapService) {}

  ngOnInit() {
    this.form = new FormGroup({
      city: new FormControl('', Validators.required),
    });
  }

  searchCity(): void {
    const city: string = this.form.get('city')?.value.trim();
    if (!city) return;

    this.loading.emit(true);

    this.openweatherService.findByCityName(city).subscribe(
      (response: Openweathermap) => {
        this.cityFound.emit(this.generateWeather(response));
        this.loading.emit(false);
      },
      () => {
        this.error =
          'Não foi possível encontrar essa cidade!<br> Por favor, tente novamente :)';
        this.loading.emit(false);
        this.onError.emit();
      }
    );
  }

  private generateWeather(openwather: Openweathermap): Weather {
    return {
      isRaining: openwather.weather
        .map((w) => w.main === 'Rain')
        .reduce((p, a) => p || a),
      temp: openwather.main.temp,
    };
  }
}
