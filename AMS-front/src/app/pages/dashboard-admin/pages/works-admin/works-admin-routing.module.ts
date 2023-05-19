import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorksAdminComponent } from './works-admin.component';



const routes: Routes = [
  { path: '', component: WorksAdminComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorksAdminRoutingModule { }