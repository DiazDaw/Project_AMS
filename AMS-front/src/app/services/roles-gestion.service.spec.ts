import { TestBed } from '@angular/core/testing';

import { RolesGestionService } from './roles-gestion.service';

describe('RolesGestionService', () => {
  let service: RolesGestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolesGestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
