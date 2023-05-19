import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environment';
import { RolesGestionModel } from '../models/rolesGestion.model';
import { RolesGestion } from '../interfaces/rolesGestion.interface';
import { RolesFalleroModel } from '../models/rolesFallero.model';
import { RolesFallero } from '../interfaces/rolesFallero.interface';

@Injectable({
  providedIn: 'root'
})
export class RolesFalleroService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.api_url;
    this.myApiUrl = 'api/falleros/roles/comision'
  }

  getRol(): Observable<RolesFalleroModel[]> {
    return this.http.get<RolesFallero[]>(`${this.myAppUrl}${this.myApiUrl}/`).pipe(
      map(response => response.map(rol => new RolesFalleroModel(rol)))
    );
  }

}
