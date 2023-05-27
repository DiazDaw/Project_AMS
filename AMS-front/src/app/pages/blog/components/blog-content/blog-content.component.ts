import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coments } from 'src/app/interfaces/coments.interface';
import { Post } from 'src/app/interfaces/post.interface';
import { LoginResponseModel } from 'src/app/models/login.model';
import { BlogService } from 'src/app/services/blog.service';
import { AgregarComentarioEntradaComponent } from '../agregar-comentario-entrada/agregar-comentario-entrada.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent implements OnInit {

  id?: number;
  postsBlog?: Post;

  idDenunciante?: number;

  sessionStorageResponse?: any;
  loginResponseModel?: LoginResponseModel;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  coments: Coments[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private _blogService: BlogService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if (idParam != null) {
      this.id = +idParam;
    }

    console.log(this.id);
    this.getOnePost(this.id);
    this.getComentsFromEntrada(this.id);
    this.getUserInfo();
  }

  getUserInfo() {
    // Recuperamos la info del local storage
    this.sessionStorageResponse = sessionStorage.getItem('loginResponse');

    // Si se encontraron datos en local storage, convertirlos a un objeto LoginResponseModel
    if (this.sessionStorageResponse) {
      this.loginResponseModel = new LoginResponseModel(JSON.parse(this.sessionStorageResponse));
    }
  }

  getOnePost(id?: number) {
    this._blogService.getOnePost(id).subscribe(
      response => {
        this.postsBlog = response;
      });
  }

  getComentsFromEntrada(id?: number) {
    if (id) {
      this._blogService.getComentsFromEntrada(id).subscribe(
        response => {
          this.coments = response;
        });
    }
  }

  deleteComent(id?: number) {
    if (id) {
      this._blogService.deleteComent(id).subscribe(() => {
        this.coments = this.coments.filter(coment => coment.idComentario !== id);
      });
    }
  }

  apuntarEditar(id?: number) {
    const dialogRef = this.dialog.open(AgregarComentarioEntradaComponent, {
      width: '50%',
      disableClose: true,
      data: { id: this.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getComentsFromEntrada(this.id);
      }
    });
  }

  deleteExit() {
    this._snackBar.open('El comentario ha sido eliminado con éxito ', '', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }

  denunciarPost(id?: number) {
    const denuncianteId = this.loginResponseModel?.usuario.idFallero;
    if (denuncianteId && id && this.postsBlog) {
      const denunciadoKey = `postDenunciado_${id}`;
      const postDenunciado = localStorage.getItem(denunciadoKey);

      if (!postDenunciado) {
        let idEstado = this.postsBlog.id_Estado;
        if (idEstado < 3) {
          idEstado += 1;
        }

        const postDenunciado = {
          idBlog: id,
          titulo: this.postsBlog.titulo,
          contenido: this.postsBlog.contenido,
          autor: this.postsBlog.autor,
          fechaCreacion: this.postsBlog.fechaCreacion.slice(0, 10),
          id_Estado: idEstado
        };

        this._blogService.updatePost(id, postDenunciado).subscribe(
          () => {
            this._snackBar.open('El post ha sido denunciado con éxito ', '', {
              duration: 5000,
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition
            });
            localStorage.setItem(denunciadoKey, JSON.stringify(postDenunciado));
          },
          error => {
            this._snackBar.open(`Error al denunciar el post ${error}`, '', {
              duration: 5000,
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition
            });
          }
        );
      } else {
        this._snackBar.open('Ya has denunciado este post anteriormente', '', {
          duration: 5000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition
        });
      }
    }
  }

  goBack() {
    this.route.navigate(['/blog'])
  }


}