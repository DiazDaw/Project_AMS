import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environment';
import { Observable, map } from 'rxjs';
import { FalleroModel } from '../models/fallero.model';
import { FalleroResponse } from '../interfaces/fallero.interface';

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
}