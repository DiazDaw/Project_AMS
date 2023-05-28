import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterTestingModule } from '@angular/router/testing';
import { EmailService } from 'src/app/services/email.service';

import { ContactoComponentComponent } from './contacto-component.component';
import { ContactoComponentModule } from './contacto-component.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ContactoComponentComponent', () => {
  let component: ContactoComponentComponent;
  let fixture: ComponentFixture<ContactoComponentComponent>;
  let emailServiceMock: Partial<EmailService>;
  let snackBarMock: Partial<MatSnackBar>;

  beforeEach(async () => {
    emailServiceMock = {
      enviarCorreo: jasmine.createSpy('enviarCorreo')
    };

    snackBarMock = {
      open: jasmine.createSpy('open')
    };

    await TestBed.configureTestingModule({
      declarations: [ContactoComponentComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MatSnackBarModule,
        MatFormFieldModule,
        ContactoComponentModule,
        NoopAnimationsModule
      ],
      providers: [
        FormBuilder,
        { provide: EmailService, useValue: emailServiceMock },
        { provide: MatSnackBar, useValue: snackBarMock },
        EmailService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    expect(component.contactForm).toBeDefined();
    expect(component.contactForm.get('nombre')).toBeDefined();
    expect(component.contactForm.get('email')).toBeDefined();
    expect(component.contactForm.get('message')).toBeDefined();
  });

  it('should reset the form on resetForm', () => {
    component.contactForm.setValue({
      nombre: 'John Doe',
      email: 'johndoe@example.com',
      message: 'This is a test message'
    });

    component.resetForm();

    expect(component.contactForm.value).toEqual({
      nombre: '',
      email: '',
      message: ''
    });
  });
});
