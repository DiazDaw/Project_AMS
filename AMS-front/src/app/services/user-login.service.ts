import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';


import { environment } from 'src/environment';

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


  login(dni: string, contrasenia: string): Observable<any>{

    this.isLoggedIn = true;
    // console.log(dni, contrasenia);

    return this.http.post<any>(`${this.myAppUrl}${this.myApiUrl}`, { dni, contrasenia });
  
  }

  logout() {

  }

  private readToken() {

  }

  private saveToken( token: string): void {
    localStorage.setItem('token', token);
  }

  private handleError(err: { message: any; }): Observable<never> {

    let errorMsg = 'Ha ocurrido un error';
    
    if(err){
      errorMsg = `Error code: ${err.message}`;
    }

    window.alert(errorMsg);
    return throwError(errorMsg);
  }
}
