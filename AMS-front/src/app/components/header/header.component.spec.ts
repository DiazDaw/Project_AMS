import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from './header.module';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [HeaderModule, RouterTestingModule, HttpClientModule], // Agrega HttpClientModule en los imports
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the HeaderComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to /user when loginNavigate is called and sessionStorage contains loginResponse', () => {
    spyOn(component['router'], 'navigate');
    spyOn(sessionStorage, 'getItem').and.returnValue('mockLoginResponse');

    component.loginNavigate();

    expect(component['router'].navigate).toHaveBeenCalledWith(['/user']);
  });

  it('should navigate to /login when loginNavigate is called and sessionStorage does not contain loginResponse', () => {
    spyOn(component['router'], 'navigate');
    spyOn(sessionStorage, 'getItem').and.returnValue(null);

    component.loginNavigate();

    expect(component['router'].navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should navigate to /admin when adminNavigate is called and sessionStorage contains loginResponse', () => {
    spyOn(component['router'], 'navigate');
    spyOn(sessionStorage, 'getItem').and.returnValue('mockLoginResponse');

    component.adminNavigate();

    expect(component['router'].navigate).toHaveBeenCalledWith(['/admin']);
  });

  it('should navigate to /login when adminNavigate is called and sessionStorage does not contain loginResponse', () => {
    spyOn(component['router'], 'navigate');
    spyOn(sessionStorage, 'getItem').and.returnValue(null);

    component.adminNavigate();

    expect(component['router'].navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should retrieve user info from sessionStorage on initialization', () => {
    spyOn(sessionStorage, 'getItem').and.returnValue('{"token": "abc123", "usuario": {"idFallero": 1, "nombre": "John", "apellidos": "Doe"}}');

    component.ngOnInit();

    expect(component.loginResponseModel).toBeDefined();
    expect(component.loginResponseModel?.token).toEqual('abc123');
    expect(component.loginResponseModel?.usuario.idFallero).toEqual(1);
    expect(component.loginResponseModel?.usuario.nombre).toEqual('John');
    expect(component.loginResponseModel?.usuario.apellidos).toEqual('Doe');
  });

  it('should not retrieve user info from sessionStorage when sessionStorage does not contain loginResponse', () => {
    spyOn(sessionStorage, 'getItem').and.returnValue(null);

    component.ngOnInit();

    expect(component.loginResponseModel).toBeUndefined();
  });
});
