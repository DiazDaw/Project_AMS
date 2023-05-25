import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogAdminComponent } from './blog-admin.component';



const routes: Routes = [
  { path: '', component: BlogAdminComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogAdminRoutingModule { }