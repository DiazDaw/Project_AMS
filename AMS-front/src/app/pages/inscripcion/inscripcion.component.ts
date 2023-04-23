import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent {

  inscripcionForm = new FormGroup({
    name: new FormControl('', Validators.required),
    telf: new FormControl('', Validators.required),
    alta: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    archivo: new FormControl('', Validators.required)
  })

}
