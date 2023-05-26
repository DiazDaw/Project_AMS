import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {

  inscripcionForm!: FormGroup;

  sender: string = 'fdmcwdaw@hotmail.com';
  recipient: string = 'fdmcwdaw@hotmail.com';
  subject: string = 'Inscripcion Falla Diaz Murillo';

  constructor(private _correoService: EmailService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inscripcionForm = this.formBuilder.group({
      email: ['', Validators.required],
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
      message: this.inscripcionForm.get('message')?.value + ' Enviado desde: ' +this.inscripcionForm.get('email')?.value
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
  }
}
