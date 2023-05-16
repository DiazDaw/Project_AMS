import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Activities } from 'src/app/interfaces/activities.interface';
import { ActivitiesService } from 'src/app/services/activities.service';

@Component({
  selector: 'app-agregar-editar-actividad',
  templateUrl: './agregar-editar-actividad.component.html',
  styleUrls: ['./agregar-editar-actividad.component.css']
})
export class AgregarEditarActividadComponent implements OnInit {

  documentos: string[] = [
    'DNI',
    'NIE',
    'Ninguno'
  ]

  form: FormGroup;
  maxDate = new Date();

  loading: boolean = false;
  tipo: string = 'Agregar ';
  idModal: number;

  dniIntroducido: any;
  disableButton: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<AgregarEditarActividadComponent>,
    private formBuilder: FormBuilder, private _activitiesService: ActivitiesService,
    private _snackBar: MatSnackBar, private dateAdapter: DateAdapter<any>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      // documentType: ['', Validators.maxLength(20)],
      fechaFin: ['', Validators.required],
      lugar: ['', Validators.required],
      coordinador: ['', Validators.required]
    })

    this.idModal = data.id;

    dateAdapter.setLocale('es');
  }

  ngOnInit(): void {
    this.esEditar(this.idModal);
  }


  esEditar(id: number | undefined) {
    if (id !== undefined) {
      this.tipo = 'Editar '
      this.getFallero(id);
    }
  }

  agregarEditarPersona() {

    const newActivity: Activities = {
      title: this.form.value.nombre,
      start: this.form.value.fechaInicio.toISOString().slice(0, 10),
      end: this.form.value.fechaFin.toISOString().slice(0, 10),
      id_Lugar: this.form.value.lugar,
      coordinador: this.form.value.coordinador

    }


    this.loading = true;

    if (this.idModal === undefined) {
      //Ejecuta modal agregar fallero
      setTimeout(() => {
        this._activitiesService.addEvents(newActivity).subscribe(() => {
          this.loading = false;
          this.dialogRef.close(true);
          this.addExit('añadido/a');
        })
      }, 1000);
    } else {
      //Es editar el modal
      setTimeout(() => {
        this._activitiesService.updateEvent(this.idModal, newActivity).subscribe(() => {
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
    this._activitiesService.getOneActivity(id).subscribe(data => {
      this.form.patchValue({
        nombre: data.title,
        fechaInicio: new Date(data.start),
        fechaFin: new Date(data.end),
        lugar: data.id_Lugar,
        coordinador: data.coordinador
      })
    })
  }
}

