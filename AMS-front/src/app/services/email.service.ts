import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.api_url;
    this.myApiUrl = 'api/email/send-email';
  }

  enviarCorreo(correo: any): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, correo);
  }
}
