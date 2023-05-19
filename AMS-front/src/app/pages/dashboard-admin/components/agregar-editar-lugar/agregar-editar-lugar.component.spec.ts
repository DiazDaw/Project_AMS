import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarLugarComponent } from './agregar-editar-lugar.component';

describe('AgregarEditarLugarComponent', () => {
  let component: AgregarEditarLugarComponent;
  let fixture: ComponentFixture<AgregarEditarLugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarLugarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
