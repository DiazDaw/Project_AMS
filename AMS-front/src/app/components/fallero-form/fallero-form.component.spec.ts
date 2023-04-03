import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalleroFormComponent } from './fallero-form.component';

describe('FalleroFormComponent', () => {
  let component: FalleroFormComponent;
  let fixture: ComponentFixture<FalleroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalleroFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalleroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
