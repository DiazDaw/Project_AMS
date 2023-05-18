import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFalleroActivityComponent } from './modal-fallero-activity.component';

describe('ModalFalleroActivityComponent', () => {
  let component: ModalFalleroActivityComponent;
  let fixture: ComponentFixture<ModalFalleroActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFalleroActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFalleroActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
