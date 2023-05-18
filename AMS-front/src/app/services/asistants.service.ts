import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environment';
import { Asistants } from '../interfaces/asistants.interface';
import { AsistantsModel } from '../models/asistant.model';
import { AsistantsByActivityModel } from '../models/asistantsByActivity.model';
import { AsistantsByActivity } from '../interfaces/asistantsByActivity.interface';

@Injectable({
  providedIn: 'root'
})
export class AsistantsService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.api_url;
    this.myApiUrl = 'api/asistentes'
  }

  getByActivity(id: number): Observable<AsistantsByActivityModel[]> {
    return this.http.get<AsistantsByActivity[]>(`${this.myAppUrl}${this.myApiUrl}/actividad/${id}`).pipe(
      map(response => response.map(asistentes => new AsistantsByActivityModel(asistentes)))
    );
  }
  

  postAsistant(asistant: Asistants ): Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}/`, asistant);
  }
}
