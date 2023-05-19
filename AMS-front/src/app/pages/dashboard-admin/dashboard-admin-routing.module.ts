import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin.component';
import { UserAdminComponent } from './pages/user-admin/user-admin.component';
import { EventsAdminComponent } from './pages/events-admin/events-admin.component';
import { PartnersAdminComponent } from './pages/partners-admin/partners-admin.component';
import { PlacesAdminComponent } from './pages/places-admin/places-admin.component';
import { WorksAdminComponent } from './pages/works-admin/works-admin.component';

const routes: Routes = [
  { path: '', component: DashboardAdminComponent },
  { path: 'admin', component: DashboardAdminComponent },
  { path: 'users', component: UserAdminComponent },
  { path: 'actividades', component: EventsAdminComponent },
  { path: 'partners', component: PartnersAdminComponent },
  { path: 'places', component: PlacesAdminComponent },
  { path: 'works', component: WorksAdminComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAdminRoutingModule { }