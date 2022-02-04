import { Component, EventEmitter, Output } from '@angular/core';

import { Openweathermap } from '../../models/openweathermap.model';
import { Weather } from '../../models/weather.model';
import { OpenweathermapService } from '../../services/openweathermap.service';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css'],
})
export class CityFormComponent {
  @Output() loading: EventEmitter<boolean> = new EventEmitter();
  @Output() cityFound: EventEmitter<Weather> = new EventEmitter();

  cityInput: string = '';

  constructor(private openweatherService: OpenweathermapService) {}

  searchCity(): void {
    this.cityInput = this.cityInput.trim();
    if (!this.cityInput) return;

    this.loading.emit(true);

    setTimeout(() => {
      this.cityFound.emit({ isRaining: false, temp: 35 });
    }, 500);

    /*this.openweatherService
      .findByCityName(this.cityInput)
      .subscribe((response: Openweathermap) => {
        this.cityFound.emit(this.generateWeather(response));
        this.loading.emit(false);
      });*/
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
