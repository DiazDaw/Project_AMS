import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-agregar-editar-fallero',
  templateUrl: './agregar-editar-fallero.component.html',
  styleUrls: ['./agregar-editar-fallero.component.css']
})
export class AgregarEditarFalleroComponent {


  constructor(public dialogRef: MatDialogRef<AgregarEditarFalleroComponent>){}

  cancelar(){
    this.dialogRef.close(); 
  }
}
