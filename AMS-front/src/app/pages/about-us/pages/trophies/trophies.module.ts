import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TrophiesComponent } from './trophies.component';
import { TrophiesRoutingModule } from './trophies-routing.module';



@NgModule({
  declarations: [TrophiesComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TrophiesRoutingModule
  ]
})
export class TrophiesComponentModule { }
