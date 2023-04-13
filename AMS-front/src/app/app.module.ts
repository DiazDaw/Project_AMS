import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './components/header/header.component';

import { RouterModule, Routes } from '@angular/router';
import { ContactoComponentComponent } from './pages/contacto-component/contacto-component.component';
import { InscripcionComponent } from './pages/inscripcion/inscripcion.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { LoginComponent } from './pages/login/login.component';
import { HystoryComponentComponent } from './pages/about-us/pages/hystory-component/hystory-component.component';
import { TrophiesComponent } from './pages/about-us/pages/trophies/trophies.component';
import { PeopleComponent } from './pages/about-us/pages/people/people.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PartnersComponent } from './pages/about-us/pages/partners/partners.component';
import { FooterComponent } from './components/footer/footer.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'inscripcion',
    component: InscripcionComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'nosotros/historia',
    component: HystoryComponentComponent
  },
  {
    path: 'nosotros/premios',
    component: TrophiesComponent
  },
  {
    path: 'nosotros/comision',
    component: PeopleComponent
  },
  {
    path: 'nosotros/colaboradores',
    component: PartnersComponent
  },
  {
    path: 'contacto',
    component: ContactoComponentComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactoComponentComponent,
    InscripcionComponent,
    AboutUsComponent,
    LoginComponent,
    HystoryComponentComponent,
    TrophiesComponent,
    PeopleComponent,
    HomeComponent,
    PartnersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatMenuModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
