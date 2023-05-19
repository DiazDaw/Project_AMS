import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarFalleroComponent } from './agregar-editar-fallero.component';

describe('AgregarEditarFalleroComponent', () => {
  let component: AgregarEditarFalleroComponent;
  let fixture: ComponentFixture<AgregarEditarFalleroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarFalleroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarFalleroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
