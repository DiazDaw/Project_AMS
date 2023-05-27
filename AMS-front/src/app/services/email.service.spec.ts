import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { EmailService } from './email.service';

describe('EmailService', () => {
  let service: EmailService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmailService]
    });
    service = TestBed.inject(EmailService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send an email', () => {
    const correo = {
      from: 'mockemail@gmail.com',
      to: 'mockemail@gmail.com',
      subject: 'Mock Email',
      text: 'Mock message email'
    };

    const apiUrl = 'http://localhost:3000/api/email/send-email';    ; // Asigna la URL de la API aquí

    service.enviarCorreo(correo).subscribe(
      (response: any) => {
        // Handle the response
        expect(response).toBeDefined();
        // Assert any other expectations on the response
      },
      (error: any) => {
        // Handle the error
      }
    );

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('POST');
    req.flush({});
  });
});
