import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { CambiarPasswordComponent } from './cambiar-password.component';
import { FallerosService } from 'src/app/services/falleros.service';
import { LoginResponseModel } from 'src/app/models/login.model';

describe('CambiarPasswordComponent', () => {
  let component: CambiarPasswordComponent;
  let fixture: ComponentFixture<CambiarPasswordComponent>;
  let snackBarSpy: jasmine.SpyObj<MatSnackBar>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<CambiarPasswordComponent>>;
  let fallerosServiceSpy: jasmine.SpyObj<FallerosService>;

  beforeEach(async () => {
    const snackBarMock = jasmine.createSpyObj('MatSnackBar', ['open']);
    const dialogRefMock = jasmine.createSpyObj('MatDialogRef', ['close']);
    const fallerosServiceMock = jasmine.createSpyObj('FallerosService', ['updatePassword']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [CambiarPasswordComponent],
      providers: [
        FormBuilder,
        { provide: MatSnackBar, useValue: snackBarMock },
        { provide: MatDialogRef, useValue: dialogRefMock },
        { provide: FallerosService, useValue: fallerosServiceMock },
      ],
    }).compileComponents();

    snackBarSpy = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
    dialogRefSpy = TestBed.inject(MatDialogRef) as jasmine.SpyObj<MatDialogRef<CambiarPasswordComponent>>;
    fallerosServiceSpy = TestBed.inject(FallerosService) as jasmine.SpyObj<FallerosService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarPasswordComponent);
    component = fixture.componentInstance;
    component.loginResponseModel = new LoginResponseModel({
      token: 'asdasdadsasdasd',
      usuario: {
        idFallero: 1,
        nombre: 'asdasdasd',
        apellidos: 'asdasdasd',
        dni: 'asdasdasd',
        contrasenia: 'adsasdasd',
        fechaNac: '2023-05-12',
        fechaRegistro: '2023-05-20',
        id_Rol_Fallero: 1,
        id_Rol_Gestion: 1,
        telefono: '96312547',
      }
    }); // Aquí puedes proporcionar datos de prueba para el modelo
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    expect(component.form).toBeDefined();
    expect(component.form.get('lastPass')).toBeDefined();
    expect(component.form.get('newPass')).toBeDefined();
    expect(component.form.get('confirmNewPass')).toBeDefined();
  });

  it('should get user info from session storage', () => {
    const sessionStorageResponse = JSON.stringify({
      usuario: {
        idFallero: 1,
      },
    });
    spyOn(sessionStorage, 'getItem').and.returnValue(sessionStorageResponse);

    component.getUserInfo();

    expect(sessionStorage.getItem).toHaveBeenCalledWith('loginResponse');
    expect(component.loginResponseModel).toBeDefined();
    expect(component.loginResponseModel?.usuario?.idFallero).toBe(1);
  });

  it('should update password and close dialog on successful update', () => {
    const contrasenia = 'newPassword';
    spyOn(fallerosServiceSpy, 'updatePassword').and.returnValue(of(void 0));
    spyOn(sessionStorage, 'getItem').and.returnValue(JSON.stringify(component.loginResponseModel));
    spyOn(sessionStorage, 'setItem');
  
    component.form.get('confirmNewPass')?.setValue(contrasenia);
    component.agregarEditarPersona();
  
    expect(fallerosServiceSpy.updatePassword).toHaveBeenCalled();
    expect(fallerosServiceSpy.updatePassword).toHaveBeenCalledWith(
      component.loginResponseModel?.usuario?.idFallero as number, // Asegurar que no sea undefined
      contrasenia
    );
    expect(dialogRefSpy.close).toHaveBeenCalledWith(true);
    expect(snackBarSpy.open).toHaveBeenCalledWith('Contraseña cambiada con éxito ', '', { duration: 5000 });
  
    expect(sessionStorage.getItem).toHaveBeenCalledWith('loginResponse');
    expect(sessionStorage.setItem).toHaveBeenCalled();
    const setItemArgs = (sessionStorage.setItem as jasmine.Spy).calls.first().args;
    const updatedLoginResponseString = setItemArgs[1];
    const updatedLoginResponse = JSON.parse(updatedLoginResponseString);
    expect(updatedLoginResponse.usuario.contrasenia).toBe(contrasenia);
  });
  

  it('should handle error on password update', () => {
    const errorResponse = { error: 'Password update failed' };
    spyOn(fallerosServiceSpy, 'updatePassword').and.returnValue(throwError(errorResponse));

    component.form.get('confirmNewPass')?.setValue('newPassword');
    component.agregarEditarPersona();

    expect(fallerosServiceSpy.updatePassword).toHaveBeenCalled();
    expect(dialogRefSpy.close).not.toHaveBeenCalled();
    expect(snackBarSpy.open).not.toHaveBeenCalled();
  });

  it('should close dialog on cancel', () => {
    component.cancelar();

    expect(dialogRefSpy.close).toHaveBeenCalledWith(false);
  });
});
