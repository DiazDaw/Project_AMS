// import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
// import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { MatInputModule } from '@angular/material/input';
// import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { of } from 'rxjs';
// import { AgregarEditarPartnerComponent } from './agregar-editar-partner.component';
// import { PartnersService } from 'src/app/services/partners.service';
// import { Partners } from 'src/app/interfaces/partners.interface';
// import { NativeDateModule } from '@angular/material/core';


// describe('AgregarEditarPartnerComponent', () => {
//   let component: AgregarEditarPartnerComponent;
//   let fixture: ComponentFixture<AgregarEditarPartnerComponent>;
//   let partnersService: jasmine.SpyObj<PartnersService>;
//   let snackBar: MatSnackBar;
//   let dialogRefSpy: jasmine.SpyObj<any>;

//   beforeEach(
//     waitForAsync(() => {
//       const dialogRefSpyObj = jasmine.createSpyObj('MatDialogRef', ['close']);

//       TestBed.configureTestingModule({
//         declarations: [AgregarEditarPartnerComponent],
//         imports: [
//           BrowserAnimationsModule,
//           MatDialogModule,
//           MatSnackBarModule,
//           MatInputModule,
//           FormsModule,
//           ReactiveFormsModule,
//           NativeDateModule
//         ],
//         providers: [
//           { provide: MatDialogRef, useValue: dialogRefSpyObj },
//           {
//             provide: MAT_DIALOG_DATA,
//             useValue: {
//               id: 1, // Establecer el valor del id adecuado aquí
//               tipo: 'Editar' // Establecer el valor del tipo adecuado aquí
//             }
//           },
//           {
//             provide: PartnersService,
//             useValue: {
//               updatePartner: jasmine.createSpy('updatePartner').and.returnValue(of(null)),
//               getOnePartner: jasmine.createSpy('getOnePartner').and.returnValue(of({})),
//             }
//           },
//           { provide: MatSnackBar, useValue: {} }
//         ],
//       }).compileComponents();
//     })
//   );

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AgregarEditarPartnerComponent);
//     component = fixture.componentInstance;
//     partnersService = TestBed.inject(PartnersService) as jasmine.SpyObj<PartnersService>;
//     snackBar = TestBed.inject(MatSnackBar);
//     dialogRefSpy = TestBed.inject(MatDialogRef) as jasmine.SpyObj<any>;
//     fixture.detectChanges();
//   });

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should cancel the dialog', () => {
//     component.cancelar();

//     expect(dialogRefSpy.close).toHaveBeenCalled();
//   });

//   it('should update an existing partner', () => {
//     const partner: Partners = {
//       nombre: 'Partner 1',
//       producto: 'Producto 1',
//       cif: 'CIF1',
//       email: 'partner1@example.com',
//       direccion: 'Dirección 1',
//       telefono: '123456789'
//     };
//     component.form.patchValue(partner);

//     component.agregarEditarLugar();

//     expect(partnersService.updatePartner).toHaveBeenCalledWith(1, partner); // Asegúrate de que el id sea el valor correcto
//     expect(dialogRefSpy.close).toHaveBeenCalled();
//   });
// });
