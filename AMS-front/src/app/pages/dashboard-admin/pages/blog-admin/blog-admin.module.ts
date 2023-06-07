import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogAdminComponent } from './blog-admin.component';
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
import { AgregarEditarLugarModule } from '../../components/agregar-editar-lugar/agregar-editar-lugar.module';
import { DashboardAdminRoutingModule } from '../../dashboard-admin-routing.module';
import { PlacesAdminRoutingModule } from '../places-admin/places-admin-routing.module';
import { BlogAdminRoutingModule } from './blog-admin-routing.module';



@NgModule({
  declarations: [BlogAdminComponent],
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
    MatSortModule,
    MatIconModule,
    MatTooltipModule,
    BlogAdminRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatPaginatorModule
  ],
  providers: [{ provide: MatPaginatorIntl, useValue: CustomPaginatorBlog() }]
})
export class BlogAdminModule { }

export function CustomPaginatorBlog(): MatPaginatorIntl {
  const customPaginatorIntl = new MatPaginatorIntl();

  customPaginatorIntl.itemsPerPageLabel = 'Post por página';
  customPaginatorIntl.nextPageLabel = 'Página siguiente';
  customPaginatorIntl.previousPageLabel = 'Página anterior';
  customPaginatorIntl.firstPageLabel = 'Primera página';
  customPaginatorIntl.lastPageLabel = 'Última página';

  return customPaginatorIntl;
}
