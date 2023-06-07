import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DashboardAdminRoutingModule } from '../../dashboard-admin-routing.module';
import { PlacesAdminRoutingModule } from './places-admin-routing.module';
import { PlacesAdminComponent } from './places-admin.component';
import { AgregarEditarLugarModule } from '../../components/agregar-editar-lugar/agregar-editar-lugar.module';




@NgModule({
  declarations: [PlacesAdminComponent],
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
    PlacesAdminRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatSnackBarModule,
    AgregarEditarLugarModule
  ],
  providers: [{ provide: MatPaginatorIntl, useValue: CustomPaginator() }]
})
export class PlacesAdminModule { }


export function CustomPaginator() {
  const customPaginatorIntl = new MatPaginatorIntl();

  customPaginatorIntl.itemsPerPageLabel = 'Lugares por página';
  customPaginatorIntl.nextPageLabel = 'Página siguiente';
  customPaginatorIntl.previousPageLabel = 'Página anterior'
  customPaginatorIntl.firstPageLabel = 'Primera página';
  customPaginatorIntl.lastPageLabel = 'Última página'

  return customPaginatorIntl;
}