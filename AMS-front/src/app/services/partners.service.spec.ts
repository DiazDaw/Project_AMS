import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PartnersService } from './partners.service';
import { Partners } from '../interfaces/partners.interface';

describe('PartnersService', () => {
  let service: PartnersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PartnersService]
    });
    service = TestBed.inject(PartnersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve partners', () => {
    const partners: Partners[] = [
      { idProveedor: 1, nombre: 'Partner 1', producto: 'Producto 1', cif: '12345678A', email: 'partner1@example.com', direccion: 'Dirección 1', telefono: '123456789' },
      { idProveedor: 2, nombre: 'Partner 2', producto: 'Producto 2', cif: '87654321B', email: 'partner2@example.com', direccion: 'Dirección 2', telefono: '987654321' }
    ];

    service.getPartner().subscribe((response) => {
      expect(response.length).toBe(2);
      expect(Object.assign({}, response[0])).toEqual(partners[0]);
      expect(Object.assign({}, response[1])).toEqual(partners[1]);
    });

    const req = httpMock.expectOne('http://localhost:3000/api/proveedores/');
    expect(req.request.method).toBe('GET');
    req.flush(partners);
  });


  it('should retrieve a partner by ID', () => {
    const id = 1;
    const partner: Partners = { idProveedor: 1, nombre: 'Partner 1', producto: 'Producto 1', cif: '12345678A', email: 'partner1@example.com', direccion: 'Dirección 1', telefono: '123456789' };

    service.getOnePartner(id).subscribe((response) => {
      expect(Object.assign({}, response)).toEqual(partner);
    });

    const req = httpMock.expectOne(`http://localhost:3000/api/proveedores/${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(partner);
  });
  
  it('should add a partner', () => {
    const partner: Partners = { nombre: 'New Partner', producto: 'New Producto', cif: '12345678A', email: 'newpartner@example.com', direccion: 'New Dirección', telefono: '123456789' };
  
    spyOn(service, 'addPartner').and.callThrough();
  
    service.addPartner(partner).subscribe(() => {
      // Handle the response - Aquí puedes agregar tu lógica de manejo de respuesta
      expect(service.addPartner).toHaveBeenCalled();
      console.log('Partner added successfully');
    });
  
    const req = httpMock.expectOne('http://localhost:3000/api/proveedores/');
    expect(req.request.method).toBe('POST');
    req.flush({});
  });
  

  it('should update a partner', () => {
    const id = 1;
    const partner: Partners = { idProveedor: 1, nombre: 'Updated Partner', producto: 'Updated Producto', cif: '12345678A', email: 'updatedpartner@example.com', direccion: 'Updated Dirección', telefono: '123456789' };
  
    spyOn(service, 'updatePartner').and.callThrough();
  
    service.updatePartner(id, partner).subscribe(() => {
      // Handle the response - Aquí puedes agregar tu lógica de manejo de respuesta
      expect(service.updatePartner).toHaveBeenCalled();
      console.log('Partner updated successfully');
    });
  
    const req = httpMock.expectOne(`http://localhost:3000/api/proveedores/${id}`);
    expect(req.request.method).toBe('PUT');
    req.flush({});
  });
  
  

  it('should delete a partner', () => {
    const id = 1;
  
    spyOn(service, 'deletePartner').and.callThrough();
  
    service.deletePartner(id).subscribe(() => {
      // Handle the response - Aquí puedes agregar tu lógica de manejo de respuesta
      expect(service.deletePartner).toHaveBeenCalled();
      console.log('Partner deleted successfully');
    });
  
    const req = httpMock.expectOne(`http://localhost:3000/api/proveedores/${id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
