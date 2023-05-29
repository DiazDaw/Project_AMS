import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ParamMap } from '@angular/router';
import * as dayjs from 'dayjs';
import { Activities } from 'src/app/interfaces/activities.interface';
import { AsistantsByActivity } from 'src/app/interfaces/asistantsByActivity.interface';
import { Coments } from 'src/app/interfaces/coments.interface';
import { Post } from 'src/app/interfaces/post.interface';
import { ComentsModel } from 'src/app/models/coments.model';
import { FalleroModel } from 'src/app/models/fallero.model';
import { LoginResponseModel } from 'src/app/models/login.model';
import { PlacesModel } from 'src/app/models/places.model';
import { ActivitiesService } from 'src/app/services/activities.service';
import { AsistantsService } from 'src/app/services/asistants.service';
import { BlogService } from 'src/app/services/blog.service';
import { FallerosService } from 'src/app/services/falleros.service';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-agregar-comentario-entrada',
  templateUrl: './agregar-comentario-entrada.component.html',
  styleUrls: ['./agregar-comentario-entrada.component.css']
})
export class AgregarComentarioEntradaComponent implements OnInit {

  sessionStorageResponse?: any;
  loginResponseModel?: LoginResponseModel;

  idModal?: number;

  postsBlog?: Post;

  form: FormGroup;
  minDate = new Date();
  minDateEnd: Date = new Date(); // Initialize minDateEnd with a default value

  falleros: FalleroModel[] = [];

  lugares: PlacesModel[] = [];

  loading: boolean = false;
  tipo: string = 'Agregar ';

  dniIntroducido: any;
  disableButton: boolean = false;

  asistants: AsistantsByActivity[] = [];

  constructor(
    public dialogRef: MatDialogRef<AgregarComentarioEntradaComponent>,
    private formBuilder: FormBuilder,
    private _activitiesService: ActivitiesService,
    private _asistantsService: AsistantsService,
    private _placesService: PlacesService,
    private _snackBar: MatSnackBar,
    private dateAdapter: DateAdapter<any>,
    private _fallerosService: FallerosService,
    private _blogService: BlogService,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.maxLength(50)]],
      contenido: ['', [Validators.required, Validators.maxLength(254)]],
    });

    this.dateAdapter.setLocale('es');
  }

  ngOnInit(): void {
    this.getUserInfo();
    console.log(this.loginResponseModel?.usuario);

    this.route.paramMap.subscribe((params: ParamMap) => {
      const idParam = params.get('id');
      if (idParam) {
        this.idModal = +idParam;
        
        this.getOnePost(this.idModal);
        this.getFalleros();
        this.getPlaces();
 
      }
    });
  }

  getOnePost(id?: number) {
    this._blogService.getOnePost(id).subscribe(
      response => {
        this.postsBlog = response;
      });
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

  esEditar(id: number | undefined) {
    if (id !== undefined) {
      this.tipo = 'Editar ';
      this.getFallero(id);
    }
  }

  getUserInfo() {
    //Recuperamos la info del local storage
    this.sessionStorageResponse = sessionStorage.getItem('loginResponse');

    // Si se encontraron datos en local storage, convertirlos a un objeto LoginResponseModel
    if (this.sessionStorageResponse) {
      this.loginResponseModel = new LoginResponseModel(JSON.parse(this.sessionStorageResponse));
    }
  }

  agregarEditarPersona() {

    const newComent: Coments = {
      titulo: this.form.value.titulo,
      contenido: this.form.value.contenido,
      fechaCreacion: new Date().toISOString().slice(0,10),
      autor: this.loginResponseModel?.usuario.idFallero,
      id_Estado: 1,
      id_Entrada: this.data.id,

    };
      setTimeout(() => {
        this._blogService.addComent(newComent).subscribe(() => {
          this.dialogRef.close(true);
          this.addExit('añadida');
        });
      }, 1000);

  }

  cancelar() {
    this.dialogRef.close(false);
  }

  addExit(tipo: string) {
    this._snackBar.open(`El comentario ha sido publicado con éxito `, '', {
      duration: 5000
    });
  }

  deleteExit(tipo: string) {
    this._snackBar.open(`El comentario ha sido eliminado con éxito `, '', {
      duration: 5000
    });
  }


  getFallero(id: number) {
    this._activitiesService.getOneActivity(id).subscribe(data => {
      const fechaInicio = new Date(data.start);
      const fechaFin = new Date(data.end);
  
      this.form.patchValue({
        nombre: data.title,
        fechaInicio: fechaInicio,
        horaInicio: this.formatTime(fechaInicio),
        fechaFin: fechaFin,
        horaFin: this.formatTime(fechaFin),
        lugar: data.id_Lugar,
        coordinador: data.coordinador
      });
      
      this.minDateEnd = fechaInicio; // Assign the value of fechaInicio to minDateEnd
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
          console.log(response);
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
