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
import * as dayjs from 'dayjs';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Partners } from 'src/app/interfaces/partners.interface';
import { PartnersModel } from 'src/app/models/partners.model';
import { PartnersService } from 'src/app/services/partners.service';
import { ActivityPartner } from 'src/app/interfaces/activityPartner.interface';
import { ActivityPartnerService } from 'src/app/services/activity-partner.service';
import { switchMap, throwError } from 'rxjs';

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
  ];

  form: FormGroup;
  minDate = new Date();
  minDateEnd: Date = new Date(); // Initialize minDateEnd with a default value

  falleros: FalleroModel[] = [];

  lugares: PlacesModel[] = [];

  partners: PartnersModel[] = [];

  loading: boolean = false;
  tipo: string = 'Agregar ';
  idModal: number;

  dniIntroducido: any;
  disableButton: boolean = false;

  asistants: AsistantsByActivity[] = [];

  activityChanged?: Activities;

  id_Relacion_Proveedor: any;


  constructor(
    public dialogRef: MatDialogRef<AgregarEditarActividadComponent>,
    private formBuilder: FormBuilder,
    private _activitiesService: ActivitiesService,
    private _asistantsService: AsistantsService,
    private _placesService: PlacesService,
    private _partnersService: PartnersService,
    private _snackBar: MatSnackBar,
    private dateAdapter: DateAdapter<any>,
    private _fallerosService: FallerosService,
    private _activityPartnersService: ActivityPartnerService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      fechaInicio: ['', Validators.required],
      horaInicio: ['', [Validators.required, Validators.pattern('^[0-9]{2}:[0-9]{2}$')]],
      fechaFin: ['', Validators.required],
      horaFin: ['', [Validators.required, Validators.pattern('^[0-9]{2}:[0-9]{2}$')]],
      lugar: ['', Validators.required],
      coordinador: ['', Validators.required],
      proveedor: ['']
    });

    this.idModal = data.id;

    dateAdapter.setLocale('es');
  }

  ngOnInit(): void {
    this.esEditar(this.idModal);
    this.getAsistantsByActivity(this.idModal);
    this.getFalleros();
    this.getPlaces();
    this.getPartners();
  }

  getFalleros() {
    this._fallerosService.getFalleros().subscribe((fallerosResponse: FalleroModel[]) => {
      this.falleros = fallerosResponse;
    });
  }

  getPlaces() {
    this._placesService.getPlace().subscribe((placesResponse: PlacesModel[]) => {
      this.lugares = placesResponse;
    });
  }

  getPartners() {
    this._partnersService.getPartner().subscribe((partnersModel: PartnersModel[]) => {
      this.partners = partnersModel;
    });
  }

  getOneActivity() {

  }

  esEditar(id: number | undefined) {
    if (id !== undefined) {
      this.tipo = 'Editar ';
      this.getFallero(id);
    }
  }

  agregarEditarPersona() {
    const fechaInicio = dayjs(this.combineDateAndTime(this.form.value.fechaInicio, this.form.value.horaInicio)).format('YYYY-MM-DD HH:mm:ss');
    const fechaFin = dayjs(this.combineDateAndTime(this.form.value.fechaFin, this.form.value.horaFin)).format('YYYY-MM-DD HH:mm:ss');
  
    const newActivity: Activities = {
      title: this.form.value.nombre,
      start: fechaInicio,
      end: fechaFin,
      id_Lugar: this.form.value.lugar,
      coordinador: this.form.value.coordinador
    };
  
    const newActivityPartner: ActivityPartner = {
      id_Proveedor: this.form.value.proveedor,
      id_Actividad: 0 // El ID de actividad se asignará más adelante
    };
  
    this.loading = true;
  
    if (this.idModal === undefined) {
      // Ejecutar modal agregar fallero
      this._activitiesService.addEvents(newActivity).subscribe(
        (activityId: any) => {
          console.log(activityId);
          if (activityId !== undefined) {
            newActivityPartner.id_Actividad = activityId.idNuevaActividad; // Asignar el ID de la actividad creada
  
            if (newActivityPartner.id_Proveedor !== '') {
              this._activityPartnersService.addRelation(newActivityPartner).subscribe(
                (response: any) => {
                  this.loading = false;
                  this.dialogRef.close(true);
                  this.addExit('añadida');
                },
                (error: any) => {
                  this.loading = false;
                  console.error('Error al agregar la relación actividad-proveedor', error);
                  // Manejar el error aquí según tus necesidades
                }
              );
            } else {
              this.loading = false;
              this.dialogRef.close(true);
              this.addExit('añadida');
              console.log(newActivityPartner);
              console.log(newActivity);
            }
          } else {
            console.error('El activityId es undefined');
          }
        },
        (error: any) => {
          this.loading = false;
          console.error('Error al agregar la actividad', error);
          // Manejar el error aquí según tus necesidades
        }
      );
    } else {
      console.log(this.activityChanged);
      // Es editar el modal
      if (this.idModal !== undefined) {
        this._activitiesService.updateEvent(this.idModal, newActivity).subscribe(
          (response: any) => {
            if (newActivityPartner.id_Proveedor !== '') {
              newActivityPartner.id_Actividad = this.idModal;
  
              if (this.activityChanged?.id_Relacion_Proveedor !== undefined && this.activityChanged.id_Relacion_Proveedor !== null) {
                this._activityPartnersService.updateRelation(this.activityChanged.id_Relacion_Proveedor, newActivityPartner).subscribe(
                  (response: any) => {
                    this.loading = false;
                    this.dialogRef.close(true);
                    this.addExit('actualizada');
                  },
                  (error: any) => {
                    this.loading = false;
                    console.error('Error al actualizar la relación actividad-proveedor', error);
                    // Manejar el error aquí según tus necesidades
                  }
                );
              } else {
                // Si id_Relacion_Proveedor es undefined o nulo, crea una nueva relación
                this._activityPartnersService.addRelation(newActivityPartner).subscribe(
                  (response: any) => {
                    this.loading = false;
                    this.dialogRef.close(true);
                    this.addExit('añadida');
                  },
                  (error: any) => {
                    this.loading = false;
                    console.error('Error al agregar la relación actividad-proveedor', error);
                    // Manejar el error aquí según tus necesidades
                  }
                );
              }
            } else {
              // Si no se proporciona proveedor, solo se actualiza la actividad sin modificar la relación
              this.loading = false;
              this.dialogRef.close(true);
              this.addExit('actualizada');
            }
          },
          (error: any) => {
            this.loading = false;
            console.error('Error al actualizar la actividad', error);
            // Manejar el error aquí según tus necesidades
          }
        );
      } else {
        console.error('El idModal es undefined');
      }
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
      const fechaInicio = new Date(data.start);
      const fechaFin = new Date(data.end);
      this.activityChanged = data;

      this.form.patchValue({
        nombre: data.title,
        fechaInicio: fechaInicio,
        horaInicio: this.formatTime(fechaInicio),
        fechaFin: fechaFin,
        horaFin: this.formatTime(fechaFin),
        lugar: data.id_Lugar,
        coordinador: data.coordinador,
        proveedor: data.id_Proveedor
      });

      this.minDateEnd = fechaInicio;
    });
  }

  formatTime(date: Date): string {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  onFechaInicioChange(event: MatDatepickerInputEvent<Date>) {
    const fechaInicio = event.value;
    if (fechaInicio) {
      this.minDateEnd = fechaInicio;
      this.form.get('fechaFin')?.updateValueAndValidity();
    }
  }


  getAsistantsByActivity(idActividad: number) {
    if (idActividad) {
      this._asistantsService.getByActivity(idActividad).subscribe(
        response => {
          this.asistants = response;
        });
    } else {
      console.log("ID no encontrado");
    }
  }

  combineDateAndTime(date: any, time: string): Date {
    const timeParts = time.split(':');
    const hours = Number(timeParts[0]);
    const minutes = Number(timeParts[1]);

    const combinedDateTime = dayjs(date).hour(hours).minute(minutes).toDate();
    return combinedDateTime;
  }
}
