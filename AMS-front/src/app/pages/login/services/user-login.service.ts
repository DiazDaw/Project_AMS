import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { User } from 'src/app/shared/models/user.interface';

import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.api_url;
    this.myApiUrl = 'api/login/';

   }


  login(user: string, contra: string): Observable<User[]>{

    return this.http.get<User[]>(`${this.myAppUrl}${this.myApiUrl}${user}/${contra}`);
  
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
