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
import { PlacesAdminModule } from './pages/places-admin/places-admin.module';
import { PartnersAdminModule } from './pages/partners-admin/partners-admin.module';
import { AgregarEditarPartnerComponent } from './components/agregar-editar-partner/agregar-editar-partner.component';
import { BlogAdminComponent } from './pages/blog-admin/blog-admin.component';
import { BlogAdminModule } from './pages/blog-admin/blog-admin.module';



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
    BlogAdminModule,
    PlacesAdminModule,
    PartnersAdminModule,
    MatDialogModule

  ]
})
export class DashboardAdminComponentModule { }
