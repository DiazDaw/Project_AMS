import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FallerosService } from './falleros.service';
import { FalleroResponse } from '../interfaces/fallero.interface';
import { FalleroModel } from '../models/fallero.model';
import { DNIResponse } from '../interfaces/dni.interface';

describe('FallerosService', () => {
    let service: FallerosService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [FallerosService]
        });
        service = TestBed.inject(FallerosService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should retrieve falleros', () => {
        const falleros: FalleroResponse[] = [
            {
                idFallero: 1,
                nombre: 'Fallero 1',
                apellidos: 'Apellidos 1',
                dni: '12345678A',
                fechaNac: new Date(),
                fechaRegistro: '2023-05-28',
                id_Rol_Fallero: 1,
                id_Rol_Gestion: 1,
                telefono: '123456789',
                contrasenia: 'password1',
                rolFalleroText: 'Mock rol'
            },
            {
                idFallero: 2,
                nombre: 'Fallero 2',
                apellidos: 'Apellidos 2',
                dni: '87654321B',
                fechaNac: new Date(),
                fechaRegistro: '2023-05-29',
                id_Rol_Fallero: 2,
                id_Rol_Gestion: 2, telefono:
                    '987654321',
                contrasenia: 'password2',
                rolFalleroText: 'Mock rol'
            }
        ];

        service.getFalleros().subscribe((response) => {
            expect(response).toEqual(falleros.map(fallero => new FalleroModel(fallero)));
        });

        const req = httpMock.expectOne('http://localhost:3000/api/falleros/');
        expect(req.request.method).toBe('GET');
        req.flush(falleros);
    });

    it('should delete a fallero', () => {
        const id = 1;

        service.deleteFalleros(id).subscribe(() => {
            // Handle the response
        });

        const req = httpMock.expectOne(`http://localhost:3000/api/falleros/${id}`);
        expect(req.request.method).toBe('DELETE');
        req.flush({});
    });

    it('should add a fallero', () => {
        const fallero: FalleroResponse = {
            idFallero: 1,
            nombre: 'New Fallero',
            apellidos: 'New Apellidos',
            dni: '12345678A',
            fechaNac: new Date(),
            fechaRegistro: '2023-05-28',
            id_Rol_Fallero: 1,
            id_Rol_Gestion: 1,
            telefono: '123456789',
            contrasenia: 'password',
            rolFalleroText: 'Mock rol'
        };

        service.addFalleros(fallero).subscribe(() => {
            // Handle the response
        });

        const req = httpMock.expectOne('http://localhost:3000/api/falleros/');
        expect(req.request.method).toBe('POST');
        req.flush({});
    });

    it('should retrieve a fallero by ID', () => {
        const id = 1;
        const fallero: FalleroResponse = {
            idFallero: 1,
            nombre: 'Fallero 1',
            apellidos: 'Apellidos 1',
            dni: '12345678A',
            fechaNac: new Date(),
            fechaRegistro: '2023-05-28',
            id_Rol_Fallero: 1,
            id_Rol_Gestion: 1,
            telefono: '123456789',
            contrasenia: 'password1',
            rolFalleroText: 'Mock rol'
        };

        service.getOneFallero(id).subscribe((response) => {
            expect(response).toEqual(new FalleroModel(fallero));
        });

        const req = httpMock.expectOne(`http://localhost:3000/api/falleros/${id}`);
        expect(req.request.method).toBe('GET');
        req.flush(fallero);
    });

    it('should update a fallero', () => {
        const id = 1;
        const fallero: FalleroResponse = {
            idFallero: 1,
            nombre: 'Updated Fallero',
            apellidos: 'Updated Apellidos',
            dni: '12345678A',
            fechaNac: new Date(),
            fechaRegistro: '2023-05-28',
            id_Rol_Fallero: 1,
            id_Rol_Gestion: 1,
            telefono: '123456789',
            contrasenia: 'password',
            rolFalleroText: 'Mock rol'
        };

        service.updateFallero(id, fallero).subscribe(() => {
            // Handle the response
        });

        const req = httpMock.expectOne(`http://localhost:3000/api/falleros/${id}`);
        expect(req.request.method).toBe('PUT');
        req.flush({});
    });

    it('should retrieve DNIs', () => {
        const dnis: DNIResponse[] = [
          { dni: '12345678A' },
          { dni: '87654321B' }
        ];
      
        service.getDNI().subscribe((response) => {
          expect(response.map(dni => dni.dni)).toEqual(dnis.map(dni => dni.dni));
        });
      
        const req = httpMock.expectOne('http://localhost:3000/api/dni/');
        expect(req.request.method).toBe('GET');
        req.flush(dnis);
      });
      

    it('should update a password', () => {
        const id = 1;
        const contrasenia = 'newpassword';

        service.updatePassword(id, contrasenia).subscribe(() => {
            // Handle the response
        });

        const req = httpMock.expectOne(`http://localhost:3000/api/contrasenia/${id}`);
        expect(req.request.method).toBe('PUT');
        req.flush({});
    });
});
