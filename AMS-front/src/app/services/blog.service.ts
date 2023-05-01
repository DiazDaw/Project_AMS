import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Post } from '../interfaces/post.interface';
import { Observable, map } from 'rxjs';
import { PostModel } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.api_url;
    this.myApiUrl = 'api/blog/entradas';
   }

  getPost(): Observable<PostModel[]>{
    return this.http.get<Post[]>(`${this.myAppUrl}${this.myApiUrl}/`).pipe(
      map(response=> response.map(post=> new PostModel(post)))
    );
  }
}
