import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Partners } from 'src/app/interfaces/partners.interface';
import { PartnersService } from 'src/app/services/partners.service';

@Component({
  selector: 'app-agregar-editar-partner',
  templateUrl: './agregar-editar-partner.component.html',
  styleUrls: ['./agregar-editar-partner.component.css']
})
export class AgregarEditarPartnerComponent {

  form: FormGroup;

  loading: boolean = false;
  tipo: string = 'Agregar ';
  idModal: number;

  disableButton: boolean = false;

  asistants: Partners[] = [];

  constructor(
    public dialogRef: MatDialogRef<AgregarEditarPartnerComponent>,
    private formBuilder: FormBuilder,
    private _partnersService: PartnersService,
    private _snackBar: MatSnackBar,
    private dateAdapter: DateAdapter<any>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      producto: ['', Validators.required],
      cif: ['', Validators.required],
      email: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
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

    const newPartner: Partners = {
      nombre: this.form.value.nombre,
      producto: this.form.value.producto,
      cif: this.form.value.cif,
      email: this.form.value.email,
      direccion: this.form.value.direccion,
      telefono: this.form.value.telefono
    }

    console.log(newPartner)


    this.loading = true;

    if (this.idModal === undefined) {
      //Ejecuta modal agregar fallero
      setTimeout(() => {
        this._partnersService.addPartner(newPartner).subscribe(() => {
          this.loading = false;
          this.dialogRef.close(true);
          this.addExit('añadida');
        })
      }, 1000);
    } else {
      //Es editar el modal
      setTimeout(() => {
        this._partnersService.updatePartner(this.idModal, newPartner).subscribe(() => {
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
    this._partnersService.getOnePartner(id).subscribe(data => {
      this.form.patchValue({
        nombre: data.nombre,
        producto: data.producto,
        cif: data.cif,
        email: data.email,
        direccion: data.direccion,
        telefono: data.telefono
      })
    })
  }
}
