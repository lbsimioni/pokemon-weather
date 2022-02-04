import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Types } from '../models/types.model';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  constructor(private httpClient: HttpClient) {}

  findByType(type: Types): Observable<any> {
    return this.httpClient.get<any>(`https://pokeapi.co/api/v2/type/${type}`);
  }
}
