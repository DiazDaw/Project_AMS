import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithoutpermitsComponent } from './withoutpermits.component';

const routes: Routes = [
  { path: '', component: WithoutpermitsComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithoutpermitsRoutingModule { }