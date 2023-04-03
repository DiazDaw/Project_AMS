import { TestBed } from '@angular/core/testing';

import { FalleroService } from './fallero.service';

describe('FalleroService', () => {
  let service: FalleroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FalleroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
