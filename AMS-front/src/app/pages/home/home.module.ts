import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from '../home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { LoginComponentModule } from '../login/login.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HomeRoutingModule,
    HeaderModule,
    LoginComponentModule
  ],
  exports:[]
})
export class HomeComponentModule { }
