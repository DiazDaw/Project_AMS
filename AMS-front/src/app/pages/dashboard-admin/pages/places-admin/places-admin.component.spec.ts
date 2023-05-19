import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesAdminComponent } from './places-admin.component';

describe('PlacesAdminComponent', () => {
  let component: PlacesAdminComponent;
  let fixture: ComponentFixture<PlacesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
