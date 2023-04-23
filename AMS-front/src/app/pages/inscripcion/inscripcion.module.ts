import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InscripcionComponent } from '../inscripcion/inscripcion.component';
import { InscripcionRoutingModule } from './inscripcion-routing.module';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [InscripcionComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    InscripcionRoutingModule,
    MatSelectModule
  ]
})
export class InscripcionComponentModule { }
