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
import { ActivitiesService } from 'src/app/services/activities.service';
import { Activities } from 'src/app/interfaces/activities.interface';
import { AsistantsService } from 'src/app/services/asistants.service';
import { Asistants } from 'src/app/interfaces/asistants.interface';
import { ActivityByUser } from 'src/app/interfaces/activityByUser.interface';
import { ModalFalleroActivityComponent } from '../activities/modal-fallero-activity/modal-fallero-activity.component';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {

  sessionStorageResponse?: any;

  loginResponseModel?: LoginResponseModel;

  postsBlog: Post[] = [];

  activities: ActivityByUser[] = [];

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackBar: MatSnackBar,
    private _blogService: BlogService,
    public _infoUserService: InfoUserService,
    private router: Router,
    public dialog: MatDialog,
    private _asistantsService: AsistantsService) { }

  ngOnInit(): void {
    this.getUserInfo();
    this.getPostByUser(this.loginResponseModel?.usuario.idFallero);
    this.getActivityByUser(this.loginResponseModel?.usuario.idFallero);
  }

  getUserInfo() {
    //Recuperamos la info del local storage
    this.sessionStorageResponse = sessionStorage.getItem('loginResponse');

    // Si se encontraron datos en local storage, convertirlos a un objeto LoginResponseModel
    if (this.sessionStorageResponse) {
      this.loginResponseModel = new LoginResponseModel(JSON.parse(this.sessionStorageResponse));
    }
  }

  redirectToPost(id?: number) {
    this.router.navigate(['/blog', id]);
    console.log('hola');
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

  getActivityByUser(id?: number) {
    if (id) {
      this._asistantsService.getByUser(id).subscribe(
        response => {
          this.activities = response;
        });
    } else {
      console.log("ID no encontrado");
    }
  }

  deleteAsistant(id: number, idFallero?: number) {
    if (idFallero) {
      this._asistantsService.deleteAsistant(id, idFallero).subscribe(() => {
        this.getActivityByUser(this.loginResponseModel?.usuario.idFallero);
        this.deleteMeAsistant();
      })
    }
  }

  deletePost(id?: number) {
    if (id) {
      this._blogService.deletePost(id).subscribe(() => {
        this.getPostByUser(this.loginResponseModel?.usuario.idFallero);
        this.deleteExit();
      })
    }
  }

  deleteExit() {
    this._snackBar.open('Has borrado el post con éxito ', '', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }

  deleteMeAsistant() {
    this._snackBar.open('Te has borradoe la actividad con éxito ', '', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
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

  apuntarEditar(id?: number, showApuntarmeButton?: boolean) {
    const idActividad = id
    const buttons = showApuntarmeButton// Acceder al ID de la actividad
    console.log('ID de la actividad:', idActividad);
    const dialogRef = this.dialog.open(ModalFalleroActivityComponent, {
      width: '50%',
      disableClose: true,
      data: { id: id, boton: false }
    });

  }


}

