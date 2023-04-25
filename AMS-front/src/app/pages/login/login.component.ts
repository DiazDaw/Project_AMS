import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLoginService } from './services/user-login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    dni : new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  dni!: string;
  password!: string;
  error: boolean = false;

  constructor( private login: UserLoginService) { }

  ngOnInit(): void {
    const userData = {
      username: '54289226A',
      password: 'vicmorgar12'
    }

    this.login.login(userData).subscribe((res) => console.log('Logueado'));
  }

}