import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HystoryComponentComponent } from './hystory-component.component';

describe('HystoryComponentComponent', () => {
  let component: HystoryComponentComponent;
  let fixture: ComponentFixture<HystoryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HystoryComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HystoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
