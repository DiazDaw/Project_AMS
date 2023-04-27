import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLoginService } from './services/user-login.service';

import { Router } from '@angular/router';


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


  loginForm = new FormGroup({
    dni: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  

  constructor(private _loginService: UserLoginService, private route: Router) { }

  ngOnInit(): void { }

  login(dni: string, password:string){

    this._loginService.login(dni, password).subscribe(
      response => {
        // Si la respuesta es verdadera, el usuario se autenticó correctamente
        if (response.length > 0) {
          this.logueado = true;

          this.route.navigate(['']);
        } else {
         this.logueado = false;
        }
      }
    );
  }


}



