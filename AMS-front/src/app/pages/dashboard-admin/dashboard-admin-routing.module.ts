import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin.component';
import { UserAdminComponent } from './pages/user-admin/user-admin.component';

const routes: Routes = [
  { path: '', component: DashboardAdminComponent },
  { path: 'admin', component: DashboardAdminComponent },
  { path: 'users', component: UserAdminComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAdminRoutingModule { }