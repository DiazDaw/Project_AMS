import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, throwError } from 'rxjs';


import { environment } from 'src/environment';
import { Fallero } from '../interfaces/fallero.interface';
import { FalleroModel } from '../models/fallero.model';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  private myAppUrl: string;
  private myApiUrl: string;

  isLoggedIn = false;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.api_url;
    this.myApiUrl = 'api/login/';

  }


  login(dni: string, contrasenia: string): Observable<FalleroModel[]> {

    this.isLoggedIn = true;

    return this.http.post<Fallero[]>(`${this.myAppUrl}${this.myApiUrl}`, { dni, contrasenia }).pipe(
      map(response => response.map(fallero => new FalleroModel(fallero)))
    );

  }

  logout() {

  }

  private readToken() {

  }

  private saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  private handleError(err: { message: any; }): Observable<never> {

    let errorMsg = 'Ha ocurrido un error';

    if (err) {
      errorMsg = `Error code: ${err.message}`;
    }

    window.alert(errorMsg);
    return throwError(errorMsg);
  }
}
