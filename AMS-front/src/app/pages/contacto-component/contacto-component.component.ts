import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contacto-component',
  templateUrl: './contacto-component.component.html',
  styleUrls: ['./contacto-component.component.css'],
})
export class ContactoComponentComponent implements OnInit {

  @ViewChild('contactForm') contactFormDirective: any;

  contactForm!: FormGroup;
  formSubmitted = false;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  sender: string = 'fdmcwdaw@hotmail.com';
  recipient: string = 'fdmcwdaw@hotmail.com';
  subject: string = 'Contacto Falla Diaz Murillo';

  constructor(
    private _correoService: EmailService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern("^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$")]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  enviarCorreo() {
    if (this.contactForm.invalid) {
      return;
    }

    const correo = {
      sender: this.sender,
      recipient: this.recipient,
      subject: this.subject,
      message: this.contactForm.get('message')?.value + '\nEnviado por: ' + this.contactForm.get('nombre')?.value + '\nEnviado desde: ' + this.contactForm.get('email')?.value
    };

    this._correoService.enviarCorreo(correo).subscribe(
      response => {
        console.log('Correo enviado correctamente');
      },
      error => {
        console.error('Error al enviar el correo:', error);
      }
    );

    setTimeout(() => {
      this.emailSuccess();
    }, 500);
  }

  resetForm() {
    this.contactForm.reset({
      nombre: '',
      email: '',
      message: ''
    });

    this.updateFormValidity();
  }

  updateFormValidity() {
    Object.keys(this.contactForm.controls).forEach(control => {
      const formControl = this.contactForm.get(control);
      if (formControl && formControl.invalid) {
        const element = document.getElementById(control);
        if (element) {
          element.classList.remove('ng-invalid');
          element.classList.add('ng-valid');
        }
      }
    });
  }

  emailSuccess() {
    this._snackBar.open('El email ha sido enviado con éxito ', '', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }
}
