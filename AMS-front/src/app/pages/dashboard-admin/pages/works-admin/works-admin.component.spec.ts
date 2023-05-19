import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksAdminComponent } from './works-admin.component';

describe('WorksAdminComponent', () => {
  let component: WorksAdminComponent;
  let fixture: ComponentFixture<WorksAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorksAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
