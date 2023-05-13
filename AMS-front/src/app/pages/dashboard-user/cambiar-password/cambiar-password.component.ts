import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FalleroResponse } from 'src/app/interfaces/fallero.interface';
import { LoginResponseModel } from 'src/app/models/login.model';
import { FallerosService } from 'src/app/services/falleros.service';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent implements OnInit {

  form: FormGroup;

  sessionStorageResponse?: any;

  loginResponseModel?: LoginResponseModel;

  newLoginResponseModel?: LoginResponseModel;

  constructor(private _snackBar: MatSnackBar, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<CambiarPasswordComponent>, private _falleroService: FallerosService) {
    this.form = this.formBuilder.group({
      lastPass: ['', Validators.required],
      newPass: ['', Validators.required],
      confirmNewPass: ['', Validators.required]
    })
  }
  ngOnInit(): void {
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

  agregarEditarPersona() {

    console.log(this.form.value.confirmNewPass)
    const contrasenia: string = this.form.get('confirmNewPass')?.value

    if (this.loginResponseModel) {
      this._falleroService.updatePassword(this.loginResponseModel.usuario?.idFallero, contrasenia).subscribe(() => {
        this.dialogRef.close(true);
        this.addExit('actualizado');

        //OBTENEMOS LA VARIABLE DE SESION PARA ACTUALIZARLA
        const loginResponseString = sessionStorage.getItem('loginResponse');

        //SI EXISTE LA VARIABLE
        if (loginResponseString) {

          // LA CONVERTIMOS EN UN MODELO DE LoginResponseModel
          let loginResponse = new LoginResponseModel(JSON.parse(loginResponseString));

          //LE ACTUALIZAMOS SU VALOR DE CONTRASEÑA POR LA NUEVA INTRODUCIDA
          loginResponse.usuario.contrasenia = contrasenia;

          //PASAMOS EL MODELO A UN JSON PARA PODER ENVIARLO 
          let newLoginResponseString = JSON.stringify(loginResponse);

          //ALMACENAMOS LA NUEVA INFORMACION DE SESIÓN
          sessionStorage.setItem('loginResponse', newLoginResponseString);

        }
      })
    }
  }

  addExit(tipo: string) {
    this._snackBar.open(`Contraseña cambiada con éxito `, '', {
      duration: 5000
    });
  }

  cancelar() {
    this.dialogRef.close(false);
  }
}
