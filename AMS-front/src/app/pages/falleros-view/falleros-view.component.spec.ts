import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallerosViewComponent } from './falleros-view.component';

describe('FallerosViewComponent', () => {
  let component: FallerosViewComponent;
  let fixture: ComponentFixture<FallerosViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FallerosViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FallerosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
