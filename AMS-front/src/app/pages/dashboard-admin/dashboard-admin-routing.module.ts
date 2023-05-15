import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin.component';
import { UserAdminComponent } from './pages/user-admin/user-admin.component';
import { EventsAdminComponent } from './pages/events-admin/events-admin.component';

const routes: Routes = [
  { path: '', component: DashboardAdminComponent },
  { path: 'admin', component: DashboardAdminComponent },
  { path: 'users', component: UserAdminComponent },
  { path: 'actividades', component: EventsAdminComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAdminRoutingModule { }