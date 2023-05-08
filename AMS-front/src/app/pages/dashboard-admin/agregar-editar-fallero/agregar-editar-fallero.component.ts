import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FalleroResponse } from 'src/app/interfaces/fallero.interface';


@Component({
  selector: 'app-agregar-editar-fallero',
  templateUrl: './agregar-editar-fallero.component.html',
  styleUrls: ['./agregar-editar-fallero.component.css']
})
export class AgregarEditarFalleroComponent {

  documentos: string[] = [
    'DNI',
    'NIE',
    'Ninguno'
  ]

  form: FormGroup;
  maxDate = new Date();

  constructor(public dialogRef: MatDialogRef<AgregarEditarFalleroComponent>, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(20),Validators.pattern("^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$")]],
      apellidos: ['', [Validators.required, Validators.maxLength(20), Validators.pattern("^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$")]],
      documentType: ['', [Validators.required, Validators.maxLength(20)]],
      documento: [''],
      telefono: ['', [Validators.required, Validators.maxLength(9), Validators.pattern("^[0-9]*$")]],
      fechaNac: ['', [Validators.required, Validators.maxLength(20)]],
      fechaReg: ['', [Validators.required, Validators.maxLength(20)]],
      contrasenia: ['', [Validators.required, Validators.maxLength(20)]],
      confirmContrasenia: ['', [Validators.required, Validators.maxLength(20)]],
      comision: ['', [Validators.required, Validators.maxLength(20)]],
      gestion: ['', [Validators.required, Validators.maxLength(20)]],

    })
  }

  agregarEditarPersona() {
    const newFallero: FalleroResponse = {
      nombre: this.form.value.nombre,
      apellidos: this.form.value.apellidos,
      dni: this.form.value.documento,
      telefono: this.form.value.telefono,
      fechaNac: this.form.value.fechaNac,
      fechaRegistro: this.form.value.fechaReg,
      contrasenia: this.form.value.contrasenia,
      id_Rol_Fallero: this.form.value.comision,
      id_Rol_Gestion: this.form.value.gestion
    }

    console.log(newFallero);
  }

  cancelar() {
    this.dialogRef.close();
  }
}
