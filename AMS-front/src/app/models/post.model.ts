import { Post } from '../interfaces/post.interface';

export class PostModel implements Post {
    idBlog: number;
    titulo: string;
    contenido: string;
    autor: number;
    fechaCreacion: Date;
    id_Estado: number;

  constructor(post: Post) {
    this.idBlog = post.idBlog;
    this.titulo = post.titulo;
    this.contenido = post.contenido;
    this.autor = post.autor;
    this.fechaCreacion = post.fechaCreacion;
    this.id_Estado = post.id_Estado;
  }
}
