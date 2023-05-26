import { Post } from '../interfaces/post.interface';

export class PostModel implements Post {
    idBlog?: number;
    titulo: string;
    contenido: string;
    autor?: number;
    fechaCreacion: string;
    id_Estado: number;
    nombre_autor?: string;
    apellidos_autor?: string;
    nombre_estado?: string;

  constructor(post: Post) {
    this.idBlog = post.idBlog;
    this.titulo = post.titulo;
    this.contenido = post.contenido;
    this.autor = post.autor;
    this.fechaCreacion = post.fechaCreacion;
    this.id_Estado = post.id_Estado;
    this.nombre_autor = post.nombre_autor;
    this.apellidos_autor = post.apellidos_autor;
    this.nombre_estado = post.nombre_estado;
  }
}
