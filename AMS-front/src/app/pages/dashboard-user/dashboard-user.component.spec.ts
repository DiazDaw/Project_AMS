import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardUserComponent } from './dashboard-user.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BlogService } from 'src/app/services/blog.service';
import { InfoUserService } from 'src/app/services/infoUser.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AsistantsService } from 'src/app/services/asistants.service';
import { of } from 'rxjs';
import { ModalFalleroActivityComponent } from '../activities/modal-fallero-activity/modal-fallero-activity.component';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { DashboardUserModule } from './dashboard-user.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DashboardUserComponent', () => {
    let component: DashboardUserComponent;
    let fixture: ComponentFixture<DashboardUserComponent>;
    let blogService: BlogService;
    let infoUserService: InfoUserService;
    let asistantsService: AsistantsService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, DashboardUserModule, NoopAnimationsModule, MatSnackBarModule, HttpClientModule, MatDialogModule, MatTabsModule, MatCardModule],
            declarations: [DashboardUserComponent],
            providers: [BlogService, InfoUserService, AsistantsService]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardUserComponent);
        component = fixture.componentInstance;
        blogService = TestBed.inject(BlogService);
        infoUserService = TestBed.inject(InfoUserService);
        asistantsService = TestBed.inject(AsistantsService);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call getUserInfo on ngOnInit', () => {
        spyOn(component, 'getUserInfo');
        component.ngOnInit();
        expect(component.getUserInfo).toHaveBeenCalled();
    });

    it('should call getPostByUser and getActivityByUser on ngOnInit', () => {
        spyOn(component, 'getPostByUser');
        spyOn(component, 'getActivityByUser');
        component.loginResponseModel = { usuario: { idFallero: 123 } } as any;
        component.ngOnInit();
        expect(component.getPostByUser).toHaveBeenCalledWith(123);
        expect(component.getActivityByUser).toHaveBeenCalledWith(123);
    });

    // it('should retrieve loginResponse from sessionStorage and convert to LoginResponseModel', () => {
    //     spyOn(sessionStorage, 'getItem').and.returnValue(JSON.stringify({
    //         token: 'testToken',
    //         usuario: {
    //             idFallero: 1,
    //             nombre: 'Sergio',
    //             apellidos: 'Diaz',
    //             dni: '54289664A',
    //             contrasenia: '123456789',
    //             fechaNac: '1997-04-11',
    //             fechaRegistro: '2023-05-24',
    //             id_Rol_Fallero: 1,
    //             id_Rol_Gestion: 1,
    //             telefono: '963258741'
    //         }
    //     }));
    //     component.getUserInfo();
    //     expect(component.loginResponseModel).toEqual({
    //         token: 'testToken',
    //         usuario: {
    //             idFallero: 1,
    //             nombre: 'Sergio',
    //             apellidos: 'Diaz',
    //             dni: '54289664A',
    //             contrasenia: '123456789',
    //             fechaNac: '1997-04-11',
    //             fechaRegistro: '2023-05-24',
    //             id_Rol_Fallero: 1,
    //             id_Rol_Gestion: 1,
    //             telefono: '963258741'
    //         }
    //     });
    // });


    it('should navigate to "/blog/:id" when redirectToPost is called with id', () => {
        const router = TestBed.inject(Router);
        const navigateSpy = spyOn(router, 'navigate');
        component.redirectToPost(1);
        expect(navigateSpy).toHaveBeenCalledWith(['/blog', 1]);
    });

    it('should call getByUser and set postsBlog when getPostByUser is called with id', () => {
        spyOn(blogService, 'getByUser').and.returnValue(of([{ idBlog: 1, titulo: 'Post 1', contenido: 'Contenido post 1', id_Estado: 1, fechaCreacion: '2022-05-28' }, { idBlog: 2, titulo: 'Post 2', contenido: 'Contenido post 2', id_Estado: 1, fechaCreacion: '2022-05-28' }]));
        component.getPostByUser(123);
        expect(blogService.getByUser).toHaveBeenCalledWith(123);
        expect(component.postsBlog).toEqual([{ idBlog: 1, titulo: 'Post 1', contenido: 'Contenido post 1', id_Estado: 1, fechaCreacion: '2022-05-28' }, { idBlog: 2, titulo: 'Post 2', contenido: 'Contenido post 2', id_Estado: 1, fechaCreacion: '2022-05-28' }]);
    });

    it('should log "ID no encontrado" when getPostByUser is called without id', () => {
        spyOn(console, 'log');
        component.getPostByUser();
        expect(console.log).toHaveBeenCalledWith('ID no encontrado');
    });

    it('should call getByUser and set activities when getActivityByUser is called with id', () => {
        spyOn(asistantsService, 'getByUser').and.returnValue(of([{
            id_Actividad: 1,
            title: 1,
            start: '2023-04-23',
            end: '2023-04-25'
        },
        {
            id_Actividad: 2,
            title: 2,
            start: '2023-04-23',
            end: '2023-04-25'
        }]));
        component.getActivityByUser(123);
        expect(asistantsService.getByUser).toHaveBeenCalledWith(123);
        expect(component.activities).toEqual([{
            id_Actividad: 1,
            title: 1,
            start: '2023-04-23',
            end: '2023-04-25'
        }, {
            id_Actividad: 2,
            title: 2,
            start: '2023-04-23',
            end: '2023-04-25'
        }])
    });

    it('should log "ID no encontrado" when getActivityByUser is called without id', () => {
        spyOn(console, 'log');
        component.getActivityByUser();
        expect(console.log).toHaveBeenCalledWith('ID no encontrado');
    });

    it('should call deleteAsistant and deleteMeAsistant when deleteAsistant is called with id and idFallero', () => {
        component.loginResponseModel = { usuario: { idFallero: 123 } } as any;
        spyOn(asistantsService, 'deleteAsistant').and.returnValue(of(undefined));
        spyOn(component, 'getActivityByUser');
        spyOn(component, 'deleteMeAsistant');
        component.deleteAsistant(1, 456);
        expect(asistantsService.deleteAsistant).toHaveBeenCalledWith(1, 456);
        expect(component.getActivityByUser).toHaveBeenCalledWith(123);
        expect(component.deleteMeAsistant).toHaveBeenCalled();
    });

    it('should call deletePost and deleteExit when deletePost is called with id', () => {
        component.loginResponseModel = { usuario: { idFallero: 123 } } as any;
        spyOn(blogService, 'deletePost').and.returnValue(of(undefined)); // Ajustar el valor de retorno a `of(undefined)`
        spyOn(component, 'getPostByUser');
        spyOn(component, 'deleteExit');
        component.deletePost(1);
        expect(blogService.deletePost).toHaveBeenCalledWith(1);
        expect(component.getPostByUser).toHaveBeenCalledWith(123);
        expect(component.deleteExit).toHaveBeenCalled();
    });


    it('should open a snackbar with deleteExit message', () => {
        const snackbar = TestBed.inject(MatSnackBar);
        const openSpy = spyOn(snackbar, 'open');
        component.deleteExit();
        expect(openSpy).toHaveBeenCalledWith('Has borrado el post con éxito ', '', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
        });
    });

    it('should open a snackbar with deleteMeAsistant message', () => {
        const snackbar = TestBed.inject(MatSnackBar);
        const openSpy = spyOn(snackbar, 'open');
        component.deleteMeAsistant();
        expect(openSpy).toHaveBeenCalledWith('Te has borrado de la actividad con éxito ', '', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
        });
    });

    it('should open a snackbar with logoutSuccess message', () => {
        const snackbar = TestBed.inject(MatSnackBar);
        const openSpy = spyOn(snackbar, 'open');
        component.logoutSuccess();
        expect(openSpy).toHaveBeenCalledWith('Has cerrado sesión con éxito ', '', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
        });
    });

    it('should remove loginResponse and token from sessionStorage and navigate to "/login" when logout is called', () => {
        const router = TestBed.inject(Router);
        const navigateSpy = spyOn(router, 'navigate');
        spyOn(sessionStorage, 'removeItem');
        component.logout();
        expect(sessionStorage.removeItem).toHaveBeenCalledWith('loginResponse');
        expect(sessionStorage.removeItem).toHaveBeenCalledWith('token');
        expect(navigateSpy).toHaveBeenCalledWith(['/login']);
    });


    // it('should open CambiarPasswordComponent dialog when changePass is called', () => {
    //     const dialog = TestBed.inject(MatDialog);
    //     const dialogRefMock = jasmine.createSpyObj<MatDialogRef<any, any>>(['afterClosed']);
    //     dialogRefMock.afterClosed.and.returnValue(of('dialog closed'));
    //     const openSpy = spyOn(dialog, 'open').and.returnValue(dialogRefMock);
    //     component.changePass();
    //     expect(openSpy).toHaveBeenCalledWith(CambiarPasswordComponent, jasmine.objectContaining({
    //         disableClose: true
    //     }));
    // });


    it('should open ModalFalleroActivityComponent dialog when apuntarEditar is called', () => {
        const dialog = TestBed.inject(MatDialog);
        const dialogRefMock = jasmine.createSpyObj<MatDialogRef<any, any>>(['afterClosed']);
        dialogRefMock.afterClosed.and.returnValue(of('dialog closed'));
        const openSpy = spyOn(dialog, 'open').and.returnValue(dialogRefMock);
        component.apuntarEditar(1, true);
        expect(openSpy).toHaveBeenCalledWith(ModalFalleroActivityComponent, {
            width: '50%',
            disableClose: true,
            data: { id: 1, boton: false }
        });
    });
});
