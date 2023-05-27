import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivitiesService } from './activities.service';
import { ActivitiesModel } from '../models/activities.model';
import { Activities } from '../interfaces/activities.interface';
import { CoordinatorsModel } from '../models/coordinators.model';
import { Coordinators } from '../interfaces/coordinators.interface';
import { environment } from 'src/environment';

describe('ActivitiesService', () => {
  let service: ActivitiesService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.api_url;
  const apiEndpoint = 'api/actividades';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ActivitiesService]
    });
    service = TestBed.inject(ActivitiesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve a list of events', () => {
    const mockEvents: Activities[] = [
      {
        idActividad: 1,
        title: 'Event 1',
        start: '2022-05-18',
        end: '2022-05-20',
        id_Lugar: 1,
        coordinador: 1
      },
      {
        idActividad: 2,
        title: 'Event 2',
        start: '2022-05-18',
        end: '2022-05-20',
        id_Lugar: 1,
        coordinador: 1
      }
    ];

    service.getEvents().subscribe((events: ActivitiesModel[]) => {
      expect(events.length).toBe(2);
      expect(events[0].title).toBe('Event 1');
      expect(events[1].title).toBe('Event 2');
    });

    const req = httpMock.expectOne(`${apiUrl}${apiEndpoint}/`);
    expect(req.request.method).toBe('GET');
    req.flush(mockEvents);
  });

  it('should retrieve a specific activity', () => {
    const activityId = 1;
    const mockActivity: Activities = {
      idActividad: activityId,
      title: 'Activity 1',
      start: '2022-05-18',
      end: '2022-05-20',
      id_Lugar: 1,
      coordinador: 1
    };

    service.getOneActivity(activityId).subscribe((activity: Activities) => {
      expect(activity.idActividad).toBe(activityId);
      expect(activity.title).toBe('Activity 1');
    });

    const req = httpMock.expectOne(`${apiUrl}${apiEndpoint}/${activityId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockActivity);
  });

  it('should retrieve coordinators for an activity', () => {
    const activityId = 1;
    const mockCoordinators: Coordinators[] = [
      { idActividad: 1, title: 'Coordinator 1', nombre_coordinador: 'Juan' },
      { idActividad: 2, title: 'Coordinator 2', nombre_coordinador: 'Antuan' }
    ];

    service.getCoordinador(activityId).subscribe((coordinators: CoordinatorsModel[]) => {
      expect(coordinators.length).toBe(2);
      expect(coordinators[0].title).toBe('Coordinator 1');
      expect(coordinators[1].title).toBe('Coordinator 2');
    });

    const req = httpMock.expectOne(`${apiUrl}${apiEndpoint}/coordinador/${activityId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCoordinators);
  });

  it('should add an event', () => {
    const newEvent: Activities = {
      idActividad: 1,
      title: 'New Event',
      start: '2022-05-18',
      end: '2022-05-20',
      id_Lugar: 1,
      coordinador: 1
    };

    service.addEvents(newEvent).subscribe((eventId: number) => {
      expect(eventId).toBe(1);
    });

    const req = httpMock.expectOne(`${apiUrl}${apiEndpoint}/`);
    expect(req.request.method).toBe('POST');
    req.flush(1);
  });

  it('should update an event', () => {
    const eventId = 1;
    const updatedEvent: Activities = {
      idActividad: eventId,
      title: 'Updated Event',
      start: '2022-05-18',
      end: '2022-05-22',
      id_Lugar: 1,
      coordinador: 1
    };

    service.updateEvent(eventId, updatedEvent).subscribe(() => {
      // Expectations for successful update
    });

    const req = httpMock.expectOne(`${apiUrl}${apiEndpoint}/${eventId}`);
    expect(req.request.method).toBe('PUT');
    req.flush({});
  });

  it('should delete an activity', () => {
    const activityId = 1;

    service.deleteActivity(activityId).subscribe(() => {
      // Expectations for successful deletion
    });

    const req = httpMock.expectOne(`${apiUrl}${apiEndpoint}/${activityId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
