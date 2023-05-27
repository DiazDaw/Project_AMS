import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BlogService } from './blog.service';
import { PostModel } from '../models/post.model';
import { Post } from '../interfaces/post.interface';
import { ComentsModel } from '../models/coments.model';
import { Coments } from '../interfaces/coments.interface';
import { environment } from 'src/environment';

describe('BlogService', () => {
  let service: BlogService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.api_url;
  const apiEndpoint = 'api/blog/entradas';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BlogService]
    });
    service = TestBed.inject(BlogService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve a list of posts', () => {
    const mockPosts: Post[] = [
      {
        idBlog: 1,
        titulo: 'Post 1',
        contenido: 'Contenido del post 1',
        autor: 1,
        fechaCreacion: '2023-05-28',
        id_Estado: 1,
        nombre_autor: 'Autor 1',
        apellidos_autor: 'Apellido 1',
        nombre_estado: 'Estado 1',
      },
      {
        idBlog: 2,
        titulo: 'Post 2',
        contenido: 'Contenido del post 2',
        autor: 2,
        fechaCreacion: '2023-05-29',
        id_Estado: 2,
        nombre_autor: 'Autor 2',
        apellidos_autor: 'Apellido 2',
        nombre_estado: 'Estado 2',
      }
    ];

    service.getPost().subscribe((posts: PostModel[]) => {
      expect(posts.length).toBe(2);
      expect(posts[0].idBlog).toBe(1);
      expect(posts[1].idBlog).toBe(2);
    });

    const req = httpMock.expectOne(`${apiUrl}${apiEndpoint}/`);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });

  it('should retrieve a list of posts by user', () => {
    const userId = 1;
    const mockPosts: Post[] = [
      {
        idBlog: 1,
        titulo: 'Post 1',
        contenido: 'Contenido del post 1',
        autor: 1,
        fechaCreacion: '2023-05-28',
        id_Estado: 1,
        nombre_autor: 'Autor 1',
        apellidos_autor: 'Apellido 1',
        nombre_estado: 'Estado 1',
      },
      {
        idBlog: 2,
        titulo: 'Post 2',
        contenido: 'Contenido del post 2',
        autor: 1,
        fechaCreacion: '2023-05-29',
        id_Estado: 2,
        nombre_autor: 'Autor 1',
        apellidos_autor: 'Apellido 1',
        nombre_estado: 'Estado 2',
      }
    ];

    service.getByUser(userId).subscribe((posts: PostModel[]) => {
      expect(posts.length).toBe(2);
      expect(posts[0].autor).toBe(1);
      expect(posts[1].autor).toBe(1);
    });

    const req = httpMock.expectOne(`${apiUrl}${apiEndpoint}/autores/${userId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });

  it('should add a new post', () => {
    const newPost: Post = {
      titulo: 'Nuevo Post',
      contenido: 'Contenido del nuevo post',
      fechaCreacion: '2023-05-30',
      id_Estado: 1,
    };

    service.addPost(newPost).subscribe(() => {
      // Expectations for successful addition
    });

    const req = httpMock.expectOne(`${apiUrl}${apiEndpoint}/`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newPost);
    req.flush({});
  });

  it('should update a post', () => {
    const postId = 1;
    const updatedPost: Post = {
      titulo: 'Post actualizado',
      contenido: 'Contenido actualizado',
      fechaCreacion: '2023-05-30',
      id_Estado: 2,
    };

    service.updatePost(postId, updatedPost).subscribe(() => {
      // Expectations for successful update
    });

    const req = httpMock.expectOne(`${apiUrl}${apiEndpoint}/${postId}`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(updatedPost);
    req.flush({});
  });

  it('should update the status of a post', () => {
    const postId = 1;
    const statusId = 2;
    const mockPost: Post = {
      idBlog: 1,
      titulo: 'Post 1',
      contenido: 'Contenido del post 1',
      autor: 1,
      fechaCreacion: '2023-05-28',
      id_Estado: 1,
      nombre_autor: 'Autor 1',
      apellidos_autor: 'Apellido 1',
      nombre_estado: 'Estado 1',
    };

    service.updateEstadoEntrada(postId, statusId).subscribe(() => {
      // Expectations for successful update
    });

    const getReq = httpMock.expectOne(`${apiUrl}${apiEndpoint}/${postId}`);
    expect(getReq.request.method).toBe('GET');
    getReq.flush(mockPost);

    const putReq = httpMock.expectOne(`${apiUrl}${apiEndpoint}/estado/${postId}`);
    expect(putReq.request.method).toBe('PUT');
    expect(putReq.request.body).toEqual({ ...mockPost, id_Estado: statusId });
    putReq.flush({});
  });

  it('should delete a post', () => {
    const postId = 1;

    service.deletePost(postId).subscribe(() => {
      // Expectations for successful deletion
    });

    const req = httpMock.expectOne(`${apiUrl}${apiEndpoint}/${postId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });

  it('should add a comment to a post', () => {
    const newComment: Coments = {
      idComentario: 1,
      titulo: 'Mock comment',
      contenido: 'Nuevo comentario',
      fechaCreacion: '2022-05-26',
      id_Estado: 1

    };

    service.addComent(newComment).subscribe(() => {
      // Expectations for successful addition
    });

    const req = httpMock.expectOne(`${apiUrl}${apiEndpoint}/comentario`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newComment);
    req.flush({});
  });

  it('should retrieve comments from a post', () => {
    const postId = 1;
    const mockComments: Coments[] = [
      {
        idComentario: 1,
        titulo: 'Comment 1',
        contenido: 'Content comment',
        fechaCreacion: "2023-05-05",
        id_Estado: 1
      },
      {
        idComentario: 2,
        titulo: 'Comment 2',
        contenido: 'Content comment 2',
        fechaCreacion: "2023-05-07",
        id_Estado: 1
      },
    ];

    service.getComentsFromEntrada(postId).subscribe((comments: ComentsModel[]) => {
      expect(comments.length).toBe(2);
      expect(comments[0].idComentario).toBe(1);
      expect(comments[1].idComentario).toBe(2);
    });

    const req = httpMock.expectOne(`${apiUrl}${apiEndpoint}/${postId}/comentario`);
    expect(req.request.method).toBe('GET');
    req.flush(mockComments);
  });

  it('should retrieve a single post', () => {
    const postId = 1;
    const mockPost: Post = {
      idBlog: 1,
      titulo: 'Post 1',
      contenido: 'Contenido del post 1',
      autor: 1,
      fechaCreacion: '2023-05-28',
      id_Estado: 1,
      nombre_autor: 'Autor 1',
      apellidos_autor: 'Apellido 1',
      nombre_estado: 'Estado 1',
    };

    service.getOnePost(postId).subscribe((post: Post) => {
      expect(post).toEqual(mockPost);
    });

    const req = httpMock.expectOne(`${apiUrl}${apiEndpoint}/${postId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockPost);
  });

  it('should delete a comment', () => {
    const commentId = 1;

    service.deleteComent(commentId).subscribe(() => {
      // Expectations for successful deletion
    });

    const req = httpMock.expectOne(`${apiUrl}${apiEndpoint}/comentario/${commentId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
