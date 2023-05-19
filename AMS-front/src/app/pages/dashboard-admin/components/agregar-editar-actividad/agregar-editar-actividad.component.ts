import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Activities } from 'src/app/interfaces/activities.interface';
import { AsistantsByActivity } from 'src/app/interfaces/asistantsByActivity.interface';
import { FalleroModel } from 'src/app/models/fallero.model';
import { PlacesModel } from 'src/app/models/places.model';
import { ActivitiesService } from 'src/app/services/activities.service';
import { AsistantsService } from 'src/app/services/asistants.service';
import { FallerosService } from 'src/app/services/falleros.service';
import { PlacesService } from 'src/app/services/places.service';

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

  falleros: FalleroModel[] = [];
  
  lugares: PlacesModel[] = [];

  loading: boolean = false;
  tipo: string = 'Agregar ';
  idModal: number;

  dniIntroducido: any;
  disableButton: boolean = false;

  asistants: AsistantsByActivity[] = [];

  constructor(
    public dialogRef: MatDialogRef<AgregarEditarActividadComponent>,
    private formBuilder: FormBuilder,
    private _activitiesService: ActivitiesService,
    private _asistantsService: AsistantsService,
    private _placesService: PlacesService,
    private _snackBar: MatSnackBar,
    private dateAdapter: DateAdapter<any>,
    private _fallerosService: FallerosService,
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
    this.getAsistantsByActivity(this.idModal);
    this.getFalleros();
    this.getPlaces();
  }

  getFalleros() {
    this._fallerosService.getFalleros().subscribe((fallerosResponse: FalleroModel[]) => {
      this.falleros = fallerosResponse;
    });

  }

  getPlaces(){
    this._placesService.getPlace().subscribe((placesResponse: PlacesModel[]) => {
      this.lugares = placesResponse;
    });
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
          this.addExit('añadida');
        })
      }, 1000);
    } else {
      //Es editar el modal
      setTimeout(() => {
        this._activitiesService.updateEvent(this.idModal, newActivity).subscribe(() => {
          this.loading = false;
          this.dialogRef.close(true);
          this.addExit('actualizada');
        })
      }, 1000);
    }

  }

  cancelar() {
    this.dialogRef.close(false);
  }

  addExit(tipo: string) {
    this._snackBar.open(`La actividad ha sido ${tipo} con éxito `, '', {
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

  getAsistantsByActivity(idActividad: number) {
    if (idActividad) {
      this._asistantsService.getByActivity(idActividad).subscribe(
        response => {
          this.asistants = response;
          console.log(response);
        });
    } else {
      console.log("ID no encontrado");
    }
  }
}

