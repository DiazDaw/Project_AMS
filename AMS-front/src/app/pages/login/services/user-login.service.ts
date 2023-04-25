import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { User, UserResponse } from 'src/app/shared/models/user.interface';

import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private http: HttpClient) { }


  login(userData: User): Observable<UserResponse | void> {
    return this.http
    .post<UserResponse>(`${environment.api_url}/api/falleros`, userData)
    .pipe(map((res: UserResponse) => {
        this.saveToken(res.token);
        console.log('Res ->', res)
      }),
      catchError((err) => this.handleError(err))
    );
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
