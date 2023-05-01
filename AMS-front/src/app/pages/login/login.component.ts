import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLoginService } from '../../services/user-login.service';

import { Router } from '@angular/router';
import { Fallero } from 'src/app/interfaces/fallero.interface';


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


  constructor(private _loginService: UserLoginService, private route: Router, private formBuilder: FormBuilder) { 
    this.myForm = this.formBuilder.group({
      dni: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void { }

  login(){

    this._loginService.login(this.myForm.controls['dni'].value, this.myForm.controls['password'].value).subscribe(
      response => {
        // Si la respuesta es mayor que 1, el usuario se autentificó correctamente
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



