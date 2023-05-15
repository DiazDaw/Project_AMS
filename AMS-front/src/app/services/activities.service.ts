import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { ActivitiesModel } from '../models/activities.model';
import { Observable, map } from 'rxjs';
import { Activities } from '../interfaces/activities.interface';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  private myAppUrl: string;
    private myApiUrl: string;
    
    constructor(private http: HttpClient){
        this.myAppUrl = environment.api_url;
        this.myApiUrl = 'api/actividades'
    }

    getEvents(): Observable<ActivitiesModel[]>{
      return this.http.get<Activities[]>(`${this.myAppUrl}${this.myApiUrl}/`).pipe(
        map(response=> response.map(actividad=> new ActivitiesModel(actividad)))
      );
    }
}
