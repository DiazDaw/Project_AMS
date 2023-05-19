import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarActividadComponent } from './agregar-editar-actividad.component';

describe('AgregarEditarActividadComponent', () => {
  let component: AgregarEditarActividadComponent;
  let fixture: ComponentFixture<AgregarEditarActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarActividadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
