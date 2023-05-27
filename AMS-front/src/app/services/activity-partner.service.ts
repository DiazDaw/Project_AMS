import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environment';
import { Activities } from '../interfaces/activities.interface';
import { Coordinators } from '../interfaces/coordinators.interface';
import { ActivitiesModel } from '../models/activities.model';
import { CoordinatorsModel } from '../models/coordinators.model';
import { ActivityPartnerModel } from '../models/activityPartnerModel.model';
import { ActivityPartner } from '../interfaces/activityPartner.interface';

@Injectable({
  providedIn: 'root'
})
export class ActivityPartnerService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.api_url;
    this.myApiUrl = 'api/actividad/proveedor'
  }

  getRelation(): Observable<ActivityPartnerModel[]> {
    return this.http.get<ActivityPartner[]>(`${this.myAppUrl}${this.myApiUrl}/`).pipe(
      map(response => response.map(relacion => new ActivityPartnerModel(relacion)))
    );
  }

  addRelation(relation?: ActivityPartner): Observable<ActivityPartner> {
    return this.http.post<ActivityPartner>(`${this.myAppUrl}${this.myApiUrl}/`, relation)
      .pipe(
        map((response: any) => {
          const createdRelacion: ActivityPartner = response;
          return createdRelacion;
        })
      );
  }
  

  updateRelation(id: number, relation?: ActivityPartner): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`, relation);
  }

  deleteRelation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }
  

  



 
}

