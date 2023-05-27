import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PlacesService } from './places.service';
import { Places } from '../interfaces/places.interface';
import { PlacesModel } from '../models/places.model';

describe('PlacesService', () => {
  let service: PlacesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlacesService]
    });
    service = TestBed.inject(PlacesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve places', () => {
    const places: PlacesModel[] = [
      new PlacesModel({ idLugar: 1, nombre: 'Place 1', direccion: 'Direccion 1', aforo: 100 }),
      new PlacesModel({ idLugar: 2, nombre: 'Place 2', direccion: 'Direccion 2', aforo: 200 })
    ];
  
    service.getPlace().subscribe((response) => {
      expect(response.length).toBe(2);
      expect(response[0].idLugar).toBe(places[0].idLugar);
      expect(response[0].nombre).toBe(places[0].nombre);
      expect(response[0].direccion).toBe(places[0].direccion);
      expect(response[0].aforo).toBe(places[0].aforo);
  
      expect(response[1].idLugar).toBe(places[1].idLugar);
      expect(response[1].nombre).toBe(places[1].nombre);
      expect(response[1].direccion).toBe(places[1].direccion);
      expect(response[1].aforo).toBe(places[1].aforo);
    });
  
    const req = httpMock.expectOne('http://localhost:3000/api/lugares/');
    expect(req.request.method).toBe('GET');
    req.flush(places);
  });
  
  
  it('should add a place', () => {
    const place: Places = { nombre: 'New Place', direccion: 'New Direccion', aforo: 300 };
  
    service.addPlace(place).subscribe(() => {
      // Handle the response - Aquí puedes agregar tu lógica de manejo de respuesta
      console.log('Place added successfully');
    });
  
    const req = httpMock.expectOne('http://localhost:3000/api/lugares/');
    expect(req.request.method).toBe('POST');
    req.flush({});
  });
  

  it('should update a place', () => {
    const id = 1;
    const place: Places = { idLugar: 1, nombre: 'Updated Place', direccion: 'Updated Direccion', aforo: 400 };
  
    service.updatePlace(id, place).subscribe(() => {
      // Handle the response - Aquí puedes agregar tu lógica de manejo de respuesta
      console.log('Place updated successfully');
    });
  
    const req = httpMock.expectOne(`http://localhost:3000/api/lugares/${id}`);
    expect(req.request.method).toBe('PUT');
    req.flush({});
  });
  
  

  it('should delete a place', () => {
    const id = 1;
  
    service.deletePlace(id).subscribe(() => {
      // Handle the response - Aquí puedes agregar tu lógica de manejo de respuesta
      console.log('Place deleted successfully');
    });
  
    const req = httpMock.expectOne(`http://localhost:3000/api/lugares/${id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
  
});
