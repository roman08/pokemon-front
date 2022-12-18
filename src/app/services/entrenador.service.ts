import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class EntrenadorService {
  baseUrl: string = environment.api;
  constructor(private http: HttpClient, private _srvStorage: StorageService) {}

  guardarEntrenador(data: any): Observable<any> {
    const URL = this.baseUrl + 'crearEntrenador';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders().set('Accept', 'application/json');

    // return this.http.post(URL, data, { headers }).pipe(map((res) => res));

    return this.http.post(URL, data, { headers }).pipe(map((res) => res));
  }

  obtenerEntrenadores(): Observable<any> {
    const URL = this.baseUrl + 'obtenerEntrenadores';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    // return this.http.post(URL, data, { headers }).pipe(map((res) => res));

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  actualizarEntrenador(data: any): Observable<any> {
    const URL = this.baseUrl + 'actualizarEntrenador';

    const headers = new HttpHeaders().set('Accept', 'application/json');


    return this.http.post(URL, data, { headers }).pipe(map((res) => res));
  }
}
