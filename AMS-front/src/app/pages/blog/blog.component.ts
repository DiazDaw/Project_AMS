import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { Post } from 'src/app/interfaces/post.interface';
import { InfoUserService } from 'src/app/services/infoUser.service';
import { LoginResponseModel } from 'src/app/models/login.model';
import { AgregarComentarioEntradaComponent } from './components/agregar-comentario-entrada/agregar-comentario-entrada.component';
import { MatDialog } from '@angular/material/dialog';
import { AgregarPostComponent } from './components/agregar-post/agregar-post.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  id?: number;

  postsBlog: Post[] = [];
  token = sessionStorage.getItem('token');
  dni: string = '';

  sessionStorageResponse?: any;

  loginResponseModel?: LoginResponseModel;

  constructor(
    private _blogService: BlogService,
    private route: Router,
    public dialog: MatDialog,
    public _infoUserService?: InfoUserService,
    ) { }

  ngOnInit(): void {
    this.getAllPost();
    this.getUserInfo();
  }

  getUserInfo() {
    //Recuperamos la info del local storage
    this.sessionStorageResponse = sessionStorage.getItem('loginResponse');

    // Si se encontraron datos en local storage, convertirlos a un objeto LoginResponseModel
    if (this.sessionStorageResponse) {
      this.loginResponseModel = new LoginResponseModel(JSON.parse(this.sessionStorageResponse));
    }
  }

  getAllPost() {
    this._blogService.getPost().subscribe(
      response => {
        this.postsBlog = response;
      });
  }

  redirectToPost(id?: number) {
    this.route.navigate(['/blog', id]);
    console.log('hola');
  }

  apuntarEditar(id?: number) {
    const dialogRef = this.dialog.open(AgregarPostComponent, {
      width: '500%',
      disableClose: true,
      data: { id: this.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getAllPost();
      }
    });
  }

}
