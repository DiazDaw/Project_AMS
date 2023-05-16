import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { DashboardAdminComponent } from './dashboard-admin.component';
import { DashboardAdminRoutingModule } from './dashboard-admin-routing.module';
import { UserAdminComponentModule } from './pages/user-admin/user-admin.module';
import { MatDialogModule } from '@angular/material/dialog';
import { EventsAdminComponentModule } from './pages/events-admin/events-admin.module';
import { AgregarEditarActividadComponent } from './agregar-editar-actividad/agregar-editar-actividad.component';



@NgModule({
  declarations: [DashboardAdminComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatTooltipModule,
    DashboardAdminRoutingModule,
    UserAdminComponentModule,
    EventsAdminComponentModule,
    MatDialogModule

  ]
})
export class DashboardAdminComponentModule { }
