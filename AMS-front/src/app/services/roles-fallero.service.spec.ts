import { TestBed } from '@angular/core/testing';

import { RolesFalleroService } from './roles-fallero.service';

describe('RolesFalleroService', () => {
  let service: RolesFalleroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolesFalleroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
