import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environment';
import { PartnersModel } from '../models/partners.model';
import { Partners } from '../interfaces/partners.interface';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.api_url;
    this.myApiUrl = 'api/proveedores'
  }

  getPartner(): Observable<PartnersModel[]> {
    return this.http.get<Partners[]>(`${this.myAppUrl}${this.myApiUrl}/`).pipe(
      map(response => response.map(proveedor => new PartnersModel(proveedor)))
    );
  }

  getOnePartner(id: number): Observable<PartnersModel> {
    return this.http.get<Partners>(`${this.myAppUrl}${this.myApiUrl}/${id}`).pipe(
      map((response: Partners) => new PartnersModel(response))
    );
  }


  addPartner(proveedor: Partners): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}/`, proveedor);
  }

  updatePartner(id: number, proveedor: Partners): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`, proveedor);
  }

  deletePartner(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }
}
