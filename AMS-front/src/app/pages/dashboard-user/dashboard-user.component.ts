import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { LoginResponseModel } from 'src/app/models/login.model';
import { BlogService } from 'src/app/services/blog.service';
import { InfoUserService } from 'src/app/services/infoUser.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CambiarPasswordComponent } from './cambiar-password/cambiar-password.component';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {

  sessionStorageResponse?: any;

  loginResponseModel?: LoginResponseModel;

  postsBlog: Post[] = [];

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackBar: MatSnackBar, private _blogService: BlogService, public _infoUserService: InfoUserService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUserInfo();
    this.getPostByUser(1);
  }

  getUserInfo() {
    //Recuperamos la info del local storage
    this.sessionStorageResponse = sessionStorage.getItem('loginResponse');

    // Si se encontraron datos en local storage, convertirlos a un objeto LoginResponseModel
    if (this.sessionStorageResponse) {
      this.loginResponseModel = new LoginResponseModel(JSON.parse(this.sessionStorageResponse));
    }
  }

  getPostByUser(id?: number) {
    if (id) {
      this._blogService.getByUser(id).subscribe(
        response => {
          this.postsBlog = response;
        });
    } else {
      console.log("ID no encontrado");
    }
  }

  logoutSuccess() {
    this._snackBar.open('Has cerrado sesión con éxito ', '', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }

  logout() {
    // Eliminar datos del sessionStorage
    sessionStorage.removeItem('loginResponse');
    sessionStorage.removeItem('token')

    // Redirigir a la pantalla de inicio de sesión
    this.router.navigate(['/login']);
    this.logoutSuccess();

  }

  changePass() {
    const dialogRef = this.dialog.open(CambiarPasswordComponent, {
      // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}

