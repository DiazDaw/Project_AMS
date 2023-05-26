import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutpermitsComponent } from './withoutpermits.component';

describe('WithoutpermitsComponent', () => {
  let component: WithoutpermitsComponent;
  let fixture: ComponentFixture<WithoutpermitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutpermitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithoutpermitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
