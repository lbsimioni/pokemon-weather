import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Openweathermap } from '../models/openweathermap.model';

@Injectable({
  providedIn: 'root',
})
export class OpenweathermapService {
  private readonly API_KEY: string = environment.openWeatherKey;

  constructor(private httpClient: HttpClient) {}

  findByCityName(cityName: string): Observable<Openweathermap> {
    return this.httpClient.get<Openweathermap>(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=pt_br&appid=${this.API_KEY}`
    );
  }
}
