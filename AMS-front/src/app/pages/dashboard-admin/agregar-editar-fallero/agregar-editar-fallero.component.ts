import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DNIResponse } from 'src/app/interfaces/dni.interface';
import { FalleroResponse } from 'src/app/interfaces/fallero.interface';
import { FallerosService } from 'src/app/services/falleros.service';



@Component({
  selector: 'app-agregar-editar-fallero',
  templateUrl: './agregar-editar-fallero.component.html',
  styleUrls: ['./agregar-editar-fallero.component.css']
})
export class AgregarEditarFalleroComponent implements OnInit {

  documentos: string[] = [
    'DNI',
    'NIE',
    'Ninguno'
  ]

  form: FormGroup;
  maxDate = new Date();

  dniArray: DNIResponse[] = [];

  loading: boolean = false;
  tipo: string = 'Agregar ';
  idModal: number;

  dniIntroducido: any;
  disableButton: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<AgregarEditarFalleroComponent>,
    private formBuilder: FormBuilder, private _falleroService: FallerosService,
    private _snackBar: MatSnackBar, private dateAdapter: DateAdapter<any>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(20), Validators.pattern("^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$")]],
      apellidos: ['', [Validators.required, Validators.maxLength(20), Validators.pattern("^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$")]],
      // documentType: ['', Validators.maxLength(20)],
      documento: ['', Validators.pattern("^[0-9A-Z]+$")],
      telefono: ['', [Validators.required, Validators.maxLength(9), Validators.pattern("^[0-9]*$")]],
      fechaNac: ['', [Validators.required]],
      fechaReg: ['', [Validators.required]],
      contrasenia: ['', [Validators.required, Validators.maxLength(20)]],
      confirmContrasenia: ['', [Validators.required, Validators.maxLength(20)]],
      comision: ['', [Validators.required, Validators.maxLength(20)]],
      gestion: ['', [Validators.required, Validators.maxLength(20)]],
    })

    this.idModal = data.id;

    dateAdapter.setLocale('es');
  }

  ngOnInit(): void {
    this.esEditar(this.idModal);
    this.getDNIS();
  }



  getDNIS() {
    this._falleroService.getDNI().subscribe(
      response => {
        this.dniArray = response;
      });
  }

  checkDNIS() {
    if (this.tipo == 'Agregar ') {
      for (let i = 0; i < this.dniArray.length; i++) {
        if (this.dniArray[i].dni == this.form.get('documento')?.value) {
          return true;
        }
      }
    }
    return false;
  }

  esEditar(id: number | undefined) {
    if (id !== undefined) {
      this.tipo = 'Editar '
      this.getFallero(id);
    }
  }

  agregarEditarPersona() {

    const newFallero: FalleroResponse = {
      nombre: this.form.value.nombre,
      apellidos: this.form.value.apellidos,
      dni: this.form.value.documento,
      telefono: this.form.value.telefono,
      fechaNac: this.form.value.fechaNac,
      fechaRegistro: this.form.value.fechaReg.toISOString().slice(0, 10),
      contrasenia: this.form.value.contrasenia,
      id_Rol_Fallero: this.form.value.comision.toLowerCase() === 'adulto' ? 1 : 2,
      id_Rol_Gestion: this.form.value.gestion.toLowerCase() === 'admin' ? 1 : 2,
      rolFalleroText: this.form.value.comision === 1 ? 'Adulto' : 'Infantil'
    }


    

    this.loading = true;

    if (this.idModal === undefined) {
      //Ejecuta modal agregar fallero
      setTimeout(() => {
        this._falleroService.addFalleros(newFallero).subscribe(() => {
          this.loading = false;
          this.dialogRef.close(true);
          this.addExit('añadido/a');
        })
      }, 1000);
    } else {
      //Es editar el modal
      setTimeout(() => {
        this._falleroService.updateFallero(this.idModal, newFallero).subscribe(() => {
          this.loading = false;
          this.dialogRef.close(true);
          this.addExit('actualizado/a');
        })
      }, 1000);
    }

  }

  cancelar() {
    this.dialogRef.close(false);
  }

  addExit(tipo: string) {
    this._snackBar.open(`El fallero/a ha sido ${tipo} con éxito `, '', {
      duration: 5000
    });
  }

  getFallero(id: number) {
    this._falleroService.getOneFallero(id).subscribe(data => {
      this.form.patchValue({
        nombre: data.nombre,
        apellidos: data.apellidos,
        documento: data.dni,
        telefono: data.telefono,
        fechaNac: data.fechaNac,
        fechaReg: new Date(data.fechaRegistro),
        contrasenia: data.contrasenia,
        confirmContrasenia: data.contrasenia,
        comision: data.id_Rol_Fallero,
        gestion: data.id_Rol_Gestion
      })
    })
  }
}
