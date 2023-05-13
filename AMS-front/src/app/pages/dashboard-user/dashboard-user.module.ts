import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardUserComponent } from './dashboard-user.component';
import { DashboardUserRoutingModule } from './dashboard-user-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AgregarEditarFalleroModule } from '../dashboard-admin/agregar-editar-fallero/agregar-editar-fallero.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { CambiarPasswordComponent } from './cambiar-password/cambiar-password.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DashboardUserComponent, CambiarPasswordComponent],
  imports: [
    CommonModule,
    DashboardUserRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    AgregarEditarFalleroModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    ReactiveFormsModule,
  ]
})
export class DashboardUserModule { }
