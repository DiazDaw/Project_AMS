import { TestBed } from '@angular/core/testing';

import { LoginResponse } from '../interfaces/login.interface';
import { InfoUserService } from './infoUser.service';

describe('InfoUserService', () => {
  let service: InfoUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get loginUser', () => {
    const loginUser: LoginResponse = {
      token: 'testToken',
      usuario: {
        idFallero: 1,
        nombre: 'Test User',
        apellidos: 'Test Lastname',
        dni: '12345678A',
        contrasenia: 'testPassword',
        fechaNac: '2023-05-28',
        fechaRegistro: '2023-05-28',
        id_Rol_Fallero: 1,
        id_Rol_Gestion: 1,
        telefono: '123456789'
      }
    };

    service.loginUser = loginUser;
    expect(service.loginUser).toEqual(loginUser);
  });
});
