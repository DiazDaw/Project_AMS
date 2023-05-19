import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarPartnerComponent } from './agregar-editar-partner.component';

describe('AgregarEditarPartnerComponent', () => {
  let component: AgregarEditarPartnerComponent;
  let fixture: ComponentFixture<AgregarEditarPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
