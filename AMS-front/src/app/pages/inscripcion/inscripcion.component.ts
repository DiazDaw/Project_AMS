import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {

  inscripcionForm!: FormGroup;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  sender: string = 'fdmcwdaw@hotmail.com';
  recipient: string = 'fdmcwdaw@hotmail.com';
  subject: string = 'Inscripcion Falla Diaz Murillo';

  constructor(private _correoService: EmailService, private formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.inscripcionForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  enviarCorreo() {
    if (this.inscripcionForm.invalid) {
      return;
    }

    const correo = {
      sender: this.sender,
      recipient: this.recipient,
      subject: this.subject,
      message: this.inscripcionForm.get('message')?.value + '\nEnviado desde: ' + this.inscripcionForm.get('email')?.value
    };

    this._correoService.enviarCorreo(correo).subscribe(
      response => {
        console.log('Correo enviado correctamente');
        this.inscripcionForm.reset();
      },
      error => {
        console.error('Error al enviar el correo:', error);
      }
    );

    // Marcar los campos como no tocados
    Object.keys(this.inscripcionForm.controls).forEach(key => {
      const control = this.inscripcionForm.get(key);
      if (control) {
        control.markAsUntouched();
      }
    });

    setTimeout(() => {
      this.emailSuccess();
    }, 2000)

  }

  emailSuccess() {
    this._snackBar.open('El email ha sido enviado con éxito ', '', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }
}
