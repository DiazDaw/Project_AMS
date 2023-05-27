import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RolesGestionService } from './roles-gestion.service';
import { RolesGestion } from '../interfaces/rolesGestion.interface';
import { RolesGestionModel } from '../models/rolesGestion.model';

describe('RolesGestionService', () => {
  let service: RolesGestionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RolesGestionService]
    });
    service = TestBed.inject(RolesGestionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve roles gestion', () => {
    const roles: RolesGestion[] = [
      { idRolGestion: 1, nombreRolGestion: 'Rol 1' },
      { idRolGestion: 2, nombreRolGestion: 'Rol 2' }
    ];

    service.getRol().subscribe((response) => {
      expect(response.length).toBe(2);
      expect(response[0]).toEqual(new RolesGestionModel(roles[0]));
      expect(response[1]).toEqual(new RolesGestionModel(roles[1]));
    });

    const req = httpMock.expectOne('http://localhost:3000/api/falleros/roles/gestion/');
    expect(req.request.method).toBe('GET');
    req.flush(roles);
  });
});
