import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environment';
import { RolesGestionModel } from '../models/rolesGestion.model';
import { RolesGestion } from '../interfaces/rolesGestion.interface';

@Injectable({
  providedIn: 'root'
})
export class RolesGestionService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.api_url;
    this.myApiUrl = 'api/falleros/roles/gestion'
  }

  getRol(): Observable<RolesGestionModel[]> {
    return this.http.get<RolesGestion[]>(`${this.myAppUrl}${this.myApiUrl}/`).pipe(
      map(response => response.map(rol => new RolesGestionModel(rol)))
    );
  }

}
