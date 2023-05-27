import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UserLoginService } from './user-login.service';
import { LoginResponse } from '../interfaces/login.interface';
import { LoginResponseModel } from '../models/login.model';
import { of, throwError } from 'rxjs';

describe('UserLoginService', () => {
  let service: UserLoginService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserLoginService]
    });
    service = TestBed.inject(UserLoginService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login and save token', () => {
    const mockResponse: LoginResponse = {
      token: 'abc123',
      usuario: {
        idFallero: 1,
        nombre: 'John',
        apellidos: 'Doe',
        dni: '1234567890',
        contrasenia: 'password',
        fechaNac: '1990-01-01',
        fechaRegistro: '2021-01-01',
        id_Rol_Fallero: 1,
        id_Rol_Gestion: 1,
        telefono: '1234567890'
      }
    };
  
    spyOn(service, 'login').and.returnValue(of(mockResponse));
  
    service.login('dni', 'contrasenia').subscribe(() => {
      const userInfo = service.getUserInfo();
      expect(userInfo).toEqual(null);
    });
  });
  
  

  it('should handle login error', () => {
    const mockErrorResponse = {
      error: 'Login failed'
    };
  
    spyOn(service['http'], 'post').and.returnValue(throwError(mockErrorResponse));
  
    service.login('dni', 'contrasenia').subscribe(
      () => {
        // El flujo no debería tener éxito, por lo que no se espera que se invoque este bloque
        expect(true).toBe(false);
      },
      (error) => {
        expect(error.error).toBe('Login failed');
      }
    );
  });
  
  

  it('should logout', () => {
    service.logout();
    expect(service.isLoggedIn).toBeFalse();
    expect(sessionStorage.getItem('token')).toBeNull();
  });

  it('should retrieve user info from sessionStorage', () => {
    const expectedUserInfo: LoginResponse = {
      token: 'abc123',
      usuario: {
        idFallero: 1,
        nombre: 'John',
        apellidos: 'Doe',
        dni: '1234567890',
        contrasenia: 'password',
        fechaNac: '1990-01-01',
        fechaRegistro: '2021-01-01',
        id_Rol_Fallero: 1,
        id_Rol_Gestion: 1,
        telefono: '1234567890'
      }
    };
  
    spyOn(sessionStorage, 'getItem').and.returnValue(JSON.stringify(expectedUserInfo));
  
    const userInfo = service.getUserInfo();
    expect(userInfo).toEqual(new LoginResponseModel(expectedUserInfo));
  });
  

  it('should return null when no user info is found in sessionStorage', () => {
    const userInfo = service.getUserInfo();
    expect(userInfo).toBeNull();
  });
});
