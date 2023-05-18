import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesRoutingModule } from './activitites-routing.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardAdminRoutingModule } from '../dashboard-admin/dashboard-admin-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EventsAdminRoutingModule } from '../dashboard-admin/pages/events-admin/events-admin-routing.module';
import { ModalFalleroActivityModule } from './modal-fallero-activity/modal-fallero-activity.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ActivitiesRoutingModule,
    FullCalendarModule,
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
    MatDialogModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatSnackBarModule,
    ModalFalleroActivityModule
  ],
  providers: []
})
export class ActivitiesModule { }
