import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnersAdminComponent } from './partners-admin.component';



const routes: Routes = [
  { path: '', component: PartnersAdminComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnersAdminRoutingModule { }