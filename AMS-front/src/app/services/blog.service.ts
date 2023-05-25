import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Post } from '../interfaces/post.interface';
import { Observable, map } from 'rxjs';
import { PostModel } from '../models/post.model';
import { ComentsModel } from '../models/coments.model';
import { Coments } from '../interfaces/coments.interface';

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

  getPost(): Observable<PostModel[]> {
    return this.http.get<Post[]>(`${this.myAppUrl}${this.myApiUrl}/`).pipe(
      map(response => response.map(post => new PostModel(post)))
    );
  }

  getByUser(id?: number): Observable<PostModel[]> {
    return this.http.get<Post[]>(`${this.myAppUrl}${this.myApiUrl}/autores/${id}`).pipe(
      map(response => response.map(post => new PostModel(post)))
    );
  }

  addPost(post: Post): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}/`, post);
  }

  updatePost(id: number, post: Post): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`, post);
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }
  

  addComent(coment: Coments): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}/comentario`, coment);
  }

  
  getComentsFromEntrada(id: number): Observable<ComentsModel[]> {
    return this.http.get<Coments[]>(`${this.myAppUrl}${this.myApiUrl}/${id}/comentario`).pipe(
      map(response => response.map(coment => new ComentsModel(coment)))
    );
  }

  getOnePost(id?: number): Observable<Post> {
    return this.http.get<Post>(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }

  deleteComent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}/comentario/${id}`);
  }
}
