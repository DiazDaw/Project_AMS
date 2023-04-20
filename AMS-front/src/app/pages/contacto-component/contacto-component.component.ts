import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto-component',
  templateUrl: './contacto-component.component.html',
  styleUrls: ['./contacto-component.component.css']
})
export class ContactoComponentComponent {

  loginForm = new FormGroup({
    dni : new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    msg: new FormControl('', Validators.required)
  });

  dni!: string;
  password!: string;
  msg!: string;
  error: boolean = false;

}
