import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivityPartnerService } from './activity-partner.service';
import { ActivityPartnerModel } from '../models/activityPartnerModel.model';
import { ActivityPartner } from '../interfaces/activityPartner.interface';
import { environment } from 'src/environment';

describe('ActivityPartnerService', () => {
  let service: ActivityPartnerService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.api_url;
  const apiEndpoint = 'api/actividad/proveedor';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ActivityPartnerService]
    });
    service = TestBed.inject(ActivityPartnerService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve a list of relations', () => {
    const mockRelations: ActivityPartner[] = [
      {
        id_Relacion: 1,
        id_Actividad: 1,
        id_Proveedor: 'Relation 1',
      },
      {
        id_Relacion: 2,
        id_Actividad: 2,
        id_Proveedor: 'Relation 2',
      }
    ];

    service.getRelation().subscribe((relations: ActivityPartnerModel[]) => {
      expect(relations.length).toBe(2);
      expect(relations[0].id_Relacion).toBe(1);
      expect(relations[1].id_Relacion).toBe(2);
    });

    const req = httpMock.expectOne(`${apiUrl}${apiEndpoint}/`);
    expect(req.request.method).toBe('GET');
    req.flush(mockRelations);
  });

  it('should add a relation', () => {
    const newRelation: ActivityPartner = {
      id_Proveedor: 'New Relation',
    };

    service.addRelation(newRelation).subscribe((createdRelation: ActivityPartner) => {
      expect(createdRelation.id_Proveedor).toBe('New Relation');
    });

    const req = httpMock.expectOne(`${apiUrl}${apiEndpoint}/`);
    expect(req.request.method).toBe('POST');
    req.flush(newRelation);
  });

  it('should update a relation', () => {
    const relationId = 1;
    const updatedRelation: ActivityPartner = {
      id_Relacion: relationId,
      id_Proveedor: 'Updated Relation',
    };

    service.updateRelation(relationId, updatedRelation).subscribe(() => {
      // Expectations for successful update
    });

    const req = httpMock.expectOne(`${apiUrl}${apiEndpoint}/${relationId}`);
    expect(req.request.method).toBe('PUT');
    req.flush({});
  });

  it('should delete a relation', () => {
    const relationId = 1;

    service.deleteRelation(relationId).subscribe(() => {
      // Expectations for successful deletion
    });

    const req = httpMock.expectOne(`${apiUrl}${apiEndpoint}/${relationId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
