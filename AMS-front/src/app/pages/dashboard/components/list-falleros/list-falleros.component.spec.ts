import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFallerosComponent } from './list-falleros.component';

describe('ListFallerosComponent', () => {
  let component: ListFallerosComponent;
  let fixture: ComponentFixture<ListFallerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFallerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFallerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
