import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactoComponentComponent } from './pages/contacto-component/contacto-component.component';
import { InscripcionComponent } from './pages/inscripcion/inscripcion.component';
import { LoginComponent } from './pages/login/login.component';
import { HystoryComponentComponent } from './pages/about-us/pages/hystory-component/hystory-component.component';
import { TrophiesComponent } from './pages/about-us/pages/trophies/trophies.component';
import { PeopleComponent } from './pages/about-us/pages/people/people.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PartnersComponent } from './pages/about-us/pages/partners/partners.component';

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
        path: 'login', loadChildren: () => import('../app/pages/login/login.module').then(m => m.LoginModule)
    }
]
@NgModule({
    declarations: [
        
    ],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule {}
