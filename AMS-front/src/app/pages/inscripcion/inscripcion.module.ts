import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InscripcionComponent } from '../inscripcion/inscripcion.component';
import { InscripcionRoutingModule } from './inscripcion-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { EmailService } from 'src/app/services/email.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    
  ],
  providers: [EmailService]
})
export class InscripcionComponentModule { }
