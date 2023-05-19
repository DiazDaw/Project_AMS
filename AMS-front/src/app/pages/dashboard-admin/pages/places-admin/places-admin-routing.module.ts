import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacesAdminComponent } from './places-admin.component';



const routes: Routes = [
  { path: '', component: PlacesAdminComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesAdminRoutingModule { }