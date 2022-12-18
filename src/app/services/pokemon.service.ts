import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  //Obtiene pokemon
  getPokemons(index: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/pokemon/${index}`)
      .pipe(map((res) => res));
  }
}

















