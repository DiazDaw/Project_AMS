import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLoginService } from '../../services/user-login.service';

import { Router } from '@angular/router';
import { LoginResponseModel } from 'src/app/models/login.model';
import { InfoUserService } from 'src/app/services/infoUser.service';

import * as bcrypt from 'bcryptjs';


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

  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.login();
    }
  }

  login() {
    this._loginService.login(this.myForm.controls['dni'].value, this.myForm.controls['password'].value).subscribe(
      response => {
        // Si el servidor da respuesta, el usuario se identificó correctamente
        if (response) {
          this.logueado = true;
  
          // Pasamos los datos de la response a nuestro modelo para poder usarlos
          this.loginResponse = new LoginResponseModel(response);
  
          // Desencriptar la contraseña antes de almacenarla en el sessionStorage
          const isPasswordValid = bcrypt.compareSync(this.myForm.controls['password'].value, this.loginResponse.usuario.contrasenia);
          if (isPasswordValid) {
            this.loginResponse.usuario.contrasenia = this.myForm.controls['password'].value;
  
            // Almacenamos nuestro modelo en el sessionStorage para que no se borre al recargar la página
            sessionStorage.setItem('loginResponse', JSON.stringify(this.loginResponse));
  
            // Pasamos nuestro modelo al servicio para poder exportarlo a otros componentes
            this._infoUserService.loginUser = this.loginResponse;
  
            console.log(this.loginResponse.token);
            console.log(this.loginResponse.usuario.dni);
  
            this.route.navigate(['/user']);
          } else {
            console.log('Contraseña incorrecta');
            this.logueado = false;
          }
        }
      },
      error => {
        console.log(error);
        this.logueado = false;
      }
    );
  }


}



