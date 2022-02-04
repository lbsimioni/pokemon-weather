import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Types } from '../models/types.model';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  constructor(private httpClient: HttpClient) {}

  findByType(type: Types): Observable<any> {
    return this.httpClient.get<any>(`https://pokeapi.co/api/v2/type/${type}`);
  }

  findDetails(url: string): Promise<string> {
    return this.httpClient
      .get<any>(url)
      .pipe(map((response) => response.sprites.front_default))
      .toPromise();
  }
}
