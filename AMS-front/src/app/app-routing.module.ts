import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [

    {
        path: '',
        loadChildren: () => import('../app/pages/home/home.module').then(m => m.HomeComponentModule)
    },
    {
        path: 'inscripcion',
        loadChildren: () => import('../app/pages/inscripcion/inscripcion.module').then(m => m.InscripcionComponentModule)
    },
    {
        path: 'blog',
        loadChildren: () => import('../app/pages/blog/blog.module').then(m => m.BlogComponentModule)
    },
    {
        path: 'nosotros',
        loadChildren: () => import('../app/pages/about-us/about-us.module').then(m => m.AboutUsComponentModule)
    },
    {
        path: 'contacto',
        loadChildren: () => import('../app/pages/contacto-component/contacto-component.module').then(m => m.ContactoComponentModule)
    },
    {
        path: 'login', loadChildren: () => import('../app/pages/login/login.module').then(m => m.LoginComponentModule)
    },
    {
        path: 'admin',
        canActivate: [AdminGuard],
        loadChildren: () => import('./pages/dashboard-admin/dashboard-admin.module').then(m => m.DashboardAdminComponentModule)
    },
    {
        path: 'user', loadChildren: () => import('./pages/dashboard-user/dashboard-user.module').then(m => m.DashboardUserModule)
    },
    {
        path: 'actividades', loadChildren: () => import('./pages/activities/activities.module').then(m => m.ActivitiesModule)
    },
    {
        path: 'no-admin', loadChildren: () => import('./pages/withoutpermits/withoutpermits.module').then(m => m.WithoutpermitsComponentModule)
    },
    {
        path: 'privacy', loadChildren: () => import('./pages/privacy/privacy.module').then(m => m.PrivacyModule)
    },
    { path: '**', component: NotfoundComponent },

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
