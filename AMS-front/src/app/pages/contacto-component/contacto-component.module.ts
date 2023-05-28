import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactoComponentComponent } from './contacto-component.component';
import { ContactoRoutingModule } from './contacto-routing.module';



@NgModule({
  declarations: [ContactoComponentComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ContactoRoutingModule,
  ]
})
export class ContactoComponentModule { }
