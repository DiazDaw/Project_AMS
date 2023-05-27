import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HystoryComponentComponent } from './pages/hystory-component/hystory-component.component';
import { PeopleComponent } from './pages/people/people.component';
import { PartnersComponent } from './pages/partners/partners.component';

const routes: Routes = [
  { path: '', component: HystoryComponentComponent },
  { path: 'historia', component: HystoryComponentComponent },
  { path: 'comision', component: PeopleComponent },
  { path: 'colaboradores', component: PartnersComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }