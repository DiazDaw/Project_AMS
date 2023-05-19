import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { PlacesModel } from '../models/places.model';
import { Observable, map } from 'rxjs';
import { Places } from '../interfaces/places.interface';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.api_url;
    this.myApiUrl = 'api/lugares'
  }

  getPlace(): Observable<PlacesModel[]> {
    return this.http.get<Places[]>(`${this.myAppUrl}${this.myApiUrl}/`).pipe(
      map(response => response.map(actividad => new PlacesModel(actividad)))
    );
  }

  getOnePlace(id: number): Observable<PlacesModel> {
    return this.http.get<Places>(`${this.myAppUrl}${this.myApiUrl}/${id}`).pipe(
      map((response: Places) => new PlacesModel(response))
    );
  }


  addPlace(lugar: Places): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}/`, lugar);
  }

  updatePlace(id: number, lugar: Places): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`, lugar);
  }

  deletePlace(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }
}
