import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsAdminComponent } from './events-admin.component';



const routes: Routes = [
  { path: '', component: EventsAdminComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsAdminRoutingModule { }