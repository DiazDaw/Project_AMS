import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarComentarioEntradaComponent } from './agregar-comentario-entrada.component';

describe('AgregarComentarioEntradaComponent', () => {
  let component: AgregarComentarioEntradaComponent;
  let fixture: ComponentFixture<AgregarComentarioEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarComentarioEntradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarComentarioEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
