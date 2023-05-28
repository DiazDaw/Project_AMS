// import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { MatInputModule } from '@angular/material/input';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { of } from 'rxjs';
// import { AgregarEditarActividadComponent } from './agregar-editar-actividad.component';
// import { ActivitiesService } from 'src/app/services/activities.service';
// import { AsistantsService } from 'src/app/services/asistants.service';
// import { PlacesService } from 'src/app/services/places.service';
// import { PartnersService } from 'src/app/services/partners.service';
// import { FallerosService } from 'src/app/services/falleros.service';
// import { ActivityPartnerService } from 'src/app/services/activity-partner.service';
// import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, NativeDateAdapter } from '@angular/material/core';
// import { MAT_NATIVE_DATE_FORMATS, MatNativeDateModule } from '@angular/material/core';
// import { FalleroResponse } from 'src/app/interfaces/fallero.interface';
// import { Partners } from 'src/app/interfaces/partners.interface';
// import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
// import { AgregarEditarActividadModule } from './agregar-editar-actividad.module';
// import { HttpClientModule } from '@angular/common/http';

// describe('AgregarEditarActividadComponent', () => {
//   let component: AgregarEditarActividadComponent;
//   let fixture: ComponentFixture<AgregarEditarActividadComponent>;
//   let activitiesService: ActivitiesService;
//   let asistantsService: AsistantsService;
//   let placesService: PlacesService;
//   let partnersService: PartnersService;
//   let fallerosService: FallerosService;
//   let activityPartnerService: ActivityPartnerService;

//   beforeEach(
//     waitForAsync(() => {
//       TestBed.configureTestingModule({
//         declarations: [AgregarEditarActividadComponent],
//         imports: [
//           BrowserAnimationsModule,
//           MatDialogModule,
//           MatSnackBarModule,
//           MatInputModule,
//           FormsModule,
//           ReactiveFormsModule,
//           MatNativeDateModule,
//           MatTabsModule,
//           AgregarEditarActividadModule,
//           HttpClientModule
//         ],
//         providers: [
//           { provide: MatDialogRef, useValue: {} },
//           { provide: MAT_DIALOG_DATA, useValue: {} },
//           {
//             provide: ActivitiesService,
//             useValue: {
//               addEvents: jasmine.createSpy(),
//               updateEvent: jasmine.createSpy(),
//               getOneActivity: jasmine.createSpy().and.returnValue(of({})),
//             },
//           },
//           {
//             provide: AsistantsService,
//             useValue: {
//               addEvents: jasmine.createSpy(),
//               updateEvent: jasmine.createSpy(),
//               getOneActivity: jasmine.createSpy().and.returnValue(of({})),
//             },
//           },
//           {
//             provide: PlacesService,
//             useValue: {
//               addEvents: jasmine.createSpy(),
//               updateEvent: jasmine.createSpy(),
//               getPlace: jasmine.createSpy().and.returnValue(of({})),
//             },
//           },
//           {
//             provide: PartnersService,
//             useValue: {
//               addEvents: jasmine.createSpy(),
//               updateEvent: jasmine.createSpy(),
//               getPartner: jasmine.createSpy().and.returnValue(of({})),
//             },
//           },
//           {
//             provide: FallerosService,
//             useValue: {
//               addEvents: jasmine.createSpy(),
//               updateEvent: jasmine.createSpy(),
//               getFalleros: jasmine.createSpy().and.returnValue(of({})),
//             },
//           },
//           {
//             provide: ActivityPartnerService,
//             useValue: {
//               addEvents: jasmine.createSpy(),
//               updateEvent: jasmine.createSpy(),
//               getOneActivity: jasmine.createSpy().and.returnValue(of({})),
//             },
//           },
//           { provide: DateAdapter, useClass: NativeDateAdapter  },
//           { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }, // Establece el idioma
//           { provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS }, 
          
//         ],
//       }).compileComponents();
//     })
//   );

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AgregarEditarActividadComponent);
//     component = fixture.componentInstance;
//     activitiesService = TestBed.inject(ActivitiesService);
//     asistantsService = TestBed.inject(AsistantsService);
//     partnersService = TestBed.inject(PartnersService);
//     fallerosService = TestBed.inject(FallerosService);
//     activityPartnerService = TestBed.inject(ActivityPartnerService);
//     fixture.detectChanges();
//   });

//   it('should create the component', () => {
//     fixture.detectChanges();
//     expect(component).toBeTruthy();
  
//     const tabs = fixture.nativeElement.querySelectorAll('.mat-tab-label');
//     expect(tabs.length).toBe(2);
//     expect(tabs[0].textContent).toContain('Información General');
//     expect(tabs[1].textContent).toContain('Partners');
//   });
  

//   it('should retrieve partners', () => {
//     const partners: Partners[] = [
//       { idProveedor: 1, nombre: 'Partner 1', producto: 'Producto 1', cif: '12345678A', email: 'partner1@example.com', direccion: 'Dirección 1', telefono: '123456789' },
//       { idProveedor: 2, nombre: 'Partner 2', producto: 'Producto 2', cif: '87654321B', email: 'partner2@example.com', direccion: 'Dirección 2', telefono: '987654321' }
//     ];
//     const getPartnerSpy = spyOn(partnersService, 'getPartner').and.returnValue(of(partners));
  
//     component.ngOnInit();
  
//     expect(getPartnerSpy).toHaveBeenCalled();
//     expect(component.partners).toEqual(partners);
  
//     fixture.detectChanges();
  
//     const partnerItems = fixture.nativeElement.querySelectorAll('.partner-item');
//     expect(partnerItems.length).toBe(partners.length);
  
//     partnerItems.forEach((item: any, index: any) => {
//       expect(item.textContent).toContain(partners[index].nombre);
//       expect(item.textContent).toContain(partners[index].producto);
//       expect(item.textContent).toContain(partners[index].cif);
//     });
//   });
  

//   // Add more tests for your component

// });
