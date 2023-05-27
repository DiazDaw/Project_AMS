import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Places } from 'src/app/interfaces/places.interface';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-agregar-editar-lugar',
  templateUrl: './agregar-editar-lugar.component.html',
  styleUrls: ['./agregar-editar-lugar.component.css']
})
export class AgregarEditarLugarComponent {

  form: FormGroup;

  loading: boolean = false;
  tipo: string = 'Agregar ';
  idModal: number;

  disableButton: boolean = false;

  asistants: Places[] = [];

  constructor(
    public dialogRef: MatDialogRef<AgregarEditarLugarComponent>,
    private formBuilder: FormBuilder,
    private _placesService: PlacesService,
    private _snackBar: MatSnackBar,
    private dateAdapter: DateAdapter<any>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(20)]],
      direccion: ['', [Validators.required, Validators.maxLength(100)]],
      aforo: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]*$')]]
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
      this.getOnePlace(id);
    }
  }

  agregarEditarLugar() {

    const newPlace: Places = {
      nombre: this.form.value.nombre,
      direccion: this.form.value.direccion,
      aforo: this.form.value.aforo
    }

    console.log(newPlace)


    this.loading = true;

    if (this.idModal === undefined) {
      //Ejecuta modal agregar fallero
      setTimeout(() => {
        this._placesService.addPlace(newPlace).subscribe(() => {
          this.loading = false;
          this.dialogRef.close(true);
          this.addExit('añadida');
        })
      }, 1000);
    } else {
      //Es editar el modal
      setTimeout(() => {
        this._placesService.updatePlace(this.idModal, newPlace).subscribe(() => {
          this.loading = false;
          this.dialogRef.close(true);
          this.addExit('actualizado');
        })
      }, 1000);
    }

  }

  cancelar() {
    this.dialogRef.close(false);
  }

  addExit(tipo: string) {
    this._snackBar.open(`El lugar ha sido ${tipo} con éxito `, '', {
      duration: 5000
    });
  }

  getOnePlace(id: number) {
    this._placesService.getOnePlace(id).subscribe(data => {
      this.form.patchValue({
        nombre: data.nombre,
        direccion:data.direccion,
        aforo: data.aforo
      })
    })
  }

}
