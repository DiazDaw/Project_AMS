import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { AgregarEditarFalleroComponent } from './agregar-editar-fallero.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [AgregarEditarFalleroComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule

  ]
})
export class AgregarEditarFalleroModule { }
