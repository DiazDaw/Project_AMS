import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RolesFalleroService } from './roles-fallero.service';
import { RolesFallero } from '../interfaces/rolesFallero.interface';
import { RolesFalleroModel } from '../models/rolesFallero.model';

describe('RolesFalleroService', () => {
  let service: RolesFalleroService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RolesFalleroService]
    });
    service = TestBed.inject(RolesFalleroService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve roles fallero', () => {
    const roles: RolesFallero[] = [
      { idRolFallero: 1, nombreRolFallero: 'Rol 1' },
      { idRolFallero: 2, nombreRolFallero: 'Rol 2' }
    ];

    service.getRol().subscribe((response) => {
      expect(response.length).toBe(2);
      expect(response[0]).toEqual(new RolesFalleroModel(roles[0]));
      expect(response[1]).toEqual(new RolesFalleroModel(roles[1]));
    });

    const req = httpMock.expectOne('http://localhost:3000/api/falleros/roles/comision/');
    expect(req.request.method).toBe('GET');
    req.flush(roles);
  });
});
