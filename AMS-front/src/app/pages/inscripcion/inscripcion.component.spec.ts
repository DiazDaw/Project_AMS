// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
// import { EmailService } from 'src/app/services/email.service';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { MatFormFieldModule } from '@angular/material/form-field'; // Importar el módulo MatFormFieldModule

// import { InscripcionComponent } from './inscripcion.component';

// describe('InscripcionComponent', () => {
//   let component: InscripcionComponent;
//   let fixture: ComponentFixture<InscripcionComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ InscripcionComponent ],
//       imports: [ ReactiveFormsModule, FormsModule, HttpClientTestingModule, MatFormFieldModule ], // Agregar MatFormFieldModule a los imports
//       providers: [ MatSnackBar, EmailService ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(InscripcionComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should mark form controls as invalid if fields are empty', () => {
//     component.inscripcionForm.setValue({ email: '', message: '' });
//     expect(component.inscripcionForm.valid).toBeFalsy();
//     expect(component.inscripcionForm.controls['email'].valid).toBeFalsy();
//     expect(component.inscripcionForm.controls['message'].valid).toBeFalsy();
//   });

//   it('should mark form controls as valid if fields are filled', () => {
//     component.inscripcionForm.setValue({ email: 'test@example.com', message: 'Hello' });
//     expect(component.inscripcionForm.valid).toBeTruthy();
//     expect(component.inscripcionForm.controls['email'].valid).toBeTruthy();
//     expect(component.inscripcionForm.controls['message'].valid).toBeTruthy();
//   });

//   it('should call enviarCorreo method on button click', () => {
//     spyOn(component, 'enviarCorreo');
//     const button = fixture.nativeElement.querySelector('button');
//     button.click();
//     expect(component.enviarCorreo).toHaveBeenCalled();
//   });

//   it('should call enviarCorreo method and display success message', () => {
//     const emailService = TestBed.inject(EmailService);
//     spyOn(emailService, 'enviarCorreo').and.callThrough();
//     spyOn(component, 'emailSuccess');
//     component.inscripcionForm.setValue({ email: 'test@example.com', message: 'Hello' });
//     component.enviarCorreo();
//     expect(emailService.enviarCorreo).toHaveBeenCalled();
//     expect(component.emailSuccess).toHaveBeenCalled();
//   });

//   it('should reset form controls after enviarCorreo method is called', () => {
//     component.inscripcionForm.setValue({ email: 'test@example.com', message: 'Hello' });
//     component.enviarCorreo();
//     expect(component.inscripcionForm.get('email')?.value).toEqual('');
//     expect(component.inscripcionForm.get('message')?.value).toEqual('');
//   });

//   it('should display success message', () => {
//     const snackBar = TestBed.inject(MatSnackBar);
//     spyOn(snackBar, 'open');
//     component.emailSuccess();
//     expect(snackBar.open).toHaveBeenCalled();
//   });
// });
