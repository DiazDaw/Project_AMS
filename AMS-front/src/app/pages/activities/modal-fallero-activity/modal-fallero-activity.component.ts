import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Activities } from 'src/app/interfaces/activities.interface';
import { Asistants } from 'src/app/interfaces/asistants.interface';
import { AsistantsByActivity } from 'src/app/interfaces/asistantsByActivity.interface';
import { LoginResponseModel } from 'src/app/models/login.model';
import { ActivitiesService } from 'src/app/services/activities.service';
import { AsistantsService } from 'src/app/services/asistants.service';

@Component({
  selector: 'app-modal-fallero-activity',
  templateUrl: './modal-fallero-activity.component.html',
  styleUrls: ['./modal-fallero-activity.component.css']
})
export class ModalFalleroActivityComponent {


  asistants: AsistantsByActivity[] = [];


  tipo: string = 'Agregar ';
  idActividad: number;

  sessionStorageResponse?: any;

  loginResponseModel?: LoginResponseModel;

  constructor(
    public dialogRef: MatDialogRef<ModalFalleroActivityComponent>,
    private formBuilder: FormBuilder,
    private _activitiesService: ActivitiesService,
    private _asistantsService: AsistantsService,
    private route: Router,
    private _snackBar: MatSnackBar, private dateAdapter: DateAdapter<any>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.idActividad = data.id;

  }

  ngOnInit(): void {
    // this.esEditar(this.idActividad);
    this.getUserInfo();
    this.getAsistantsByActivity(this.idActividad);
  }

  getUserInfo() {
    //Recuperamos la info del local storage
    this.sessionStorageResponse = sessionStorage.getItem('loginResponse');

    // Si se encontraron datos en local storage, convertirlos a un objeto LoginResponseModel
    if (this.sessionStorageResponse) {
      this.loginResponseModel = new LoginResponseModel(JSON.parse(this.sessionStorageResponse));
    }
  }

  getAsistantsByActivity(idActividad: number) {
    if (idActividad) {
      this._asistantsService.getByActivity(idActividad).subscribe(
        response => {
          this.asistants = response;
          console.log(response);
        });
    } else {
      console.log("ID no encontrado");
    }
  }


  agregarEditarPersona() {

    const newAsistant: Asistants = {
      id_Fallero: this.loginResponseModel?.usuario.idFallero,
      id_Actividad: this.idActividad
    }

    if (!this.asistants.some(asistant => asistant.idFallero === newAsistant.id_Fallero)) {
      setTimeout(() => {
        this._asistantsService.postAsistant(newAsistant).subscribe(() => {
          this.dialogRef.close(true);
          this.addExit('apuntado');
          this.getAsistantsByActivity(this.idActividad);
        });
      }, 1000);
    } else {
      const snackBarRef: MatSnackBarRef<any> = this._snackBar.open(`Ya estas apuntado a esta actividad.`, 'Borrarme', {
        duration: 5000
      });

      snackBarRef.onAction().subscribe(() => {
        this.cancelar();
        this.route.navigate(['/user']);
      });
    }
  }

  // esEditar(id: number | undefined) {
  //   if (id !== undefined) {
  //     this.tipo = 'Editar '
  //     this.getActivity(id);
  //   }
  // }

  cancelar() {
    this.dialogRef.close(false);
  }

  addExit(tipo: string) {
    const snackBarRef: MatSnackBarRef<any> = this._snackBar.open(`Te has ${tipo} con éxito a la actividad`, '', {
      duration: 5000,
    });
  }
}
