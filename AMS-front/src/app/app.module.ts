import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FallerosViewComponent } from './pages/falleros-view/falleros-view.component';
import { ListFallerosComponent } from './pages/dashboard/components/list-falleros/list-falleros.component';
import { FalleroFormComponent } from './components/fallero-form/fallero-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'; 
import {MatTableModule} from '@angular/material/table';
import { HeaderComponent } from './components/header/header.component';

import { RouterModule, Routes} from '@angular/router'

// const routes: Routes = [

//   {
//     path:'', component: AppComponent
//   },
//   {path:'contacto', component: },
//   {path: 'about', component:}
// ]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FallerosViewComponent,
    ListFallerosComponent,
    FalleroFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
