import { TestBed } from '@angular/core/testing';

import { AsistantsService } from './asistants.service';

describe('AsistantsService', () => {
  let service: AsistantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsistantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
