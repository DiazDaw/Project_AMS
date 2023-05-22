import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogContentComponent } from './components/blog-content/blog-content.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    
  },
  {
    path: ':id',
    component: BlogContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }