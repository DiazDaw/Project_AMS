import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLoginService } from '../../services/user-login.service';

import { Router } from '@angular/router';
import { LoginResponseModel } from 'src/app/models/login.model';
import { InfoUserService } from 'src/app/services/infoUser.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dni!: string;
  password!: string;
  error: boolean = false;

  logueado?: boolean;

  myForm: FormGroup;

  loginResponse?: LoginResponseModel; 


  constructor(private _loginService: UserLoginService, private _infoUserService: InfoUserService, private route: Router, private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      dni: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void { }

  login() {

    this._loginService.login(this.myForm.controls['dni'].value, this.myForm.controls['password'].value).subscribe(
      response => {
        // Si la respuesta es mayor que 1, el usuario se autentificó correctamente
        if (response) {
          this.logueado = true;

          // Pasamos los datos de la response a nuestro modelo para poder usarlos
          this.loginResponse = new LoginResponseModel(response);

          //Almacenamos nuestro modelo en localstorage para que no se borre al recargar pagina
          localStorage.setItem('loginResponse', JSON.stringify(this.loginResponse));

          //Pasamos nuestro modelo al servicio para poder exportarlo a otros componentes
          this._infoUserService.loginUser = this.loginResponse;

          console.log(this.loginResponse.token);
          console.log(this.loginResponse.usuario.dni);

          this.route.navigate(['']);
        }
      },
      error => {
        console.log(error);
        this.logueado = false;
      }
    );
  }


}



