
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { DashboardAdminRoutingModule } from '../../dashboard-admin-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EventsAdminComponent } from './events-admin.component';
import { EventsAdminRoutingModule } from './events-admin-routing,module';

@NgModule({
  declarations: [EventsAdminComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DashboardAdminRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatTooltipModule,
    EventsAdminRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatSnackBarModule,
    

  ],
  providers: [{ provide: MatPaginatorIntl, useValue: CustomPaginator() }]
})
export class EventsAdminComponentModule { }

export function CustomPaginator() {
  const customPaginatorIntl = new MatPaginatorIntl();

  customPaginatorIntl.itemsPerPageLabel = 'Falleros por página';
  customPaginatorIntl.nextPageLabel = 'Página siguiente';
  customPaginatorIntl.previousPageLabel = 'Página anterior'
  customPaginatorIntl.firstPageLabel = 'Primera página';
  customPaginatorIntl.lastPageLabel = 'Última página'

  return customPaginatorIntl;
}