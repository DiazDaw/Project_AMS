import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environment';
import { Observable, map } from 'rxjs';
import { FalleroModel } from '../models/fallero.model';
import { FalleroResponse } from '../interfaces/fallero.interface';
import { DNIModel } from '../models/dni.model';
import { DNIResponse } from '../interfaces/dni.interface';
import { PasswordModel } from '../models/password.model';
import { Password } from '../interfaces/password.interface';

@Injectable({
    providedIn: 'root'
})

export class FallerosService{

    private myAppUrl: string;
    private myApiUrl: string;
    
    constructor(private http: HttpClient){
        this.myAppUrl = environment.api_url;
        this.myApiUrl = 'api/falleros'
    }

    getFalleros(): Observable<FalleroModel[]>{
        return this.http.get<FalleroResponse[]>(`${this.myAppUrl}${this.myApiUrl}/`).pipe(
          map(response=> response.map(fallero=> new FalleroModel(fallero)))
        );
    }

    deleteFalleros(id: number): Observable<void>{
        return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`);
    }

    addFalleros(fallero: FalleroResponse): Observable<void>{
        return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}/`, fallero);
    }
    
    getOneFallero(id: number): Observable<FalleroModel>{
        return this.http.get<FalleroResponse>(`${this.myAppUrl}${this.myApiUrl}/${id}`);
    }

    updateFallero(id: number, fallero: FalleroModel): Observable<void>{
        return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`, fallero);
    }

    getDNI(): Observable <DNIModel[]>{
        return this.http.get<DNIResponse[]>(`${this.myAppUrl}api/dni/`).pipe(
            map(response=> response.map(dniAll=> new DNIModel(dniAll)))
        );
    }

    updatePassword(id: number, contrasenia: string): Observable<void>{
        const body = { contrasenia }
        return this.http.put<void>(`${this.myAppUrl}api/contrasenia/${id}`, body);
    }
}  