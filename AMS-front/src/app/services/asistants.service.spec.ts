import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AsistantsService } from './asistants.service';
import { AsistantsByActivityModel } from '../models/asistantsByActivity.model';
import { AsistantsByActivity } from '../interfaces/asistantsByActivity.interface';
import { AsistantsModel } from '../models/asistant.model';
import { Asistants } from '../interfaces/asistants.interface';
import { ActivityByUserModel } from '../models/activityByUser.model';
import { ActivityByUser } from '../interfaces/activityByUser.interface';
import { environment } from 'src/environment';

describe('AsistantsService', () => {
  let service: AsistantsService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.api_url;
  const apiEndpoint = 'api/asistentes';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AsistantsService]
    });
    service = TestBed.inject(AsistantsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve a list of assistants by activity', () => {
    const activityId = 1;
    const mockAsistantsByActivity: AsistantsByActivity[] = [
      {
        idFallero: 1,
        nombre: 'Assistant 1',
        apellidos: 'Apellido 1',
      },
      {
        idFallero: 2,
        nombre: 'Assistant 2',
        apellidos: 'Apellido 2',
      }
    ];

    service.getByActivity(activityId).subscribe((asistants: AsistantsByActivityModel[]) => {
      expect(asistants.length).toBe(2);
      expect(asistants[0].idFallero).toBe(1);
      expect(asistants[1].idFallero).toBe(2);
    });

    const req = httpMock.expectOne(`${apiUrl}${apiEndpoint}/actividad/${activityId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockAsistantsByActivity);
  });

  it('should retrieve a list of activities by user', () => {
    const userId = 1;
    const mockActivityByUser: ActivityByUser[] = [
      {
        id_Actividad: 1,
        title: 1,
        start: '2023-05-28',
        end: '2023-05-29',
      },
      {
        id_Actividad: 2,
        title: 2,
        start: '2023-05-30',
        end: '2023-05-31',
      }
    ];

    service.getByUser(userId).subscribe((activities: ActivityByUserModel[]) => {
      expect(activities.length).toBe(2);
      expect(activities[0].id_Actividad).toBe(1);
      expect(activities[1].id_Actividad).toBe(2);
    });

    const req = httpMock.expectOne(`${apiUrl}${apiEndpoint}/${userId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockActivityByUser);
  });

  it('should add an assistant', () => {
    const newAssistant: Asistants = {
      id_Actividad: 1,
      id_Fallero: 1,
      idRelacion: 1,
    };

    service.postAsistant(newAssistant).subscribe(() => {
      // Expectations for successful addition
    });

    const req = httpMock.expectOne(`${apiUrl}${apiEndpoint}/`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newAssistant);
    req.flush({});
  });

  it('should delete an assistant', () => {
    const assistantId = 1;
    const activityId = 1;

    service.deleteAsistant(assistantId, activityId).subscribe(() => {
      // Expectations for successful deletion
    });

    const req = httpMock.expectOne(`${apiUrl}${apiEndpoint}/fallero/${assistantId}/actividad/${activityId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
