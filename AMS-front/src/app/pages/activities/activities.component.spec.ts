// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ActivitiesComponent } from './activities.component';
// import { ActivitiesService } from 'src/app/services/activities.service';
// import { of } from 'rxjs';
// import { Activities } from 'src/app/interfaces/activities.interface';
// import { ModalFalleroActivityComponent } from './modal-fallero-activity/modal-fallero-activity.component';
// import { HttpClientModule } from '@angular/common/http';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
// import { FullCalendarModule } from '@fullcalendar/angular';
// import { DateAdapter } from '@angular/material/core';
// import { NativeDateAdapter } from '@angular/material/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatTabsModule } from '@angular/material/tabs';

// describe('ActivitiesComponent', () => {
//   let component: ActivitiesComponent;
//   let fixture: ComponentFixture<ActivitiesComponent>;
//   let activitiesService: ActivitiesService;
//   let mockSnackBar: MatSnackBar; // Agregar esta línea

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ActivitiesComponent, ModalFalleroActivityComponent],
//       providers: [
//         ActivitiesService,
//         { provide: DateAdapter, useClass: NativeDateAdapter },
//         MatSnackBar, // Agregar MatSnackBar como proveedor
//       ],
//       imports: [
//         HttpClientModule,
//         MatDialogModule,
//         MatSnackBarModule,
//         FullCalendarModule,
//         BrowserAnimationsModule,
//         MatTabsModule
//       ],
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ActivitiesComponent);
//     component = fixture.componentInstance;
//     activitiesService = TestBed.inject(ActivitiesService);
//     mockSnackBar = TestBed.inject(MatSnackBar); // Inyectar el MatSnackBar
//     fixture.detectChanges();
//   });

//   it('should create the ActivitiesComponent', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should get activities on initialization', () => {
//     const mockActivities: Activities[] = [
//       {
//         idActividad: 1,
//         title: 'Activity 1',
//         start: '2023-05-01',
//         end: '2023-05-02',
//         color: '#cdb4db',
//         id_Lugar: 1,
//         coordinador: 1,
//         nombre_coordinador: 'John Doe',
//         nombre_lugar: 'Place 1',
//         direccion_lugar: 'Address 1',
//         aforo: 100,
//         nombre_proveedor: 'Provider 1',
//         id_Proveedor: 1,
//         idNuevaActividad: 1,
//         id_Relacion_Proveedor: 1,
//       },
//       // Add more mock activities as needed
//     ];
//     spyOn(activitiesService, 'getEvents').and.returnValue(of(mockActivities));

//     component.ngOnInit();

//     expect(component.eventsModel).toEqual(mockActivities);
//     expect(component.filteredEvents).toEqual(mockActivities);
//     expect(component.calendarOptions.events).toEqual(mockActivities);
//   });

//   it('should filter events based on current date', () => {
//     const mockActivities: Activities[] = [
//       {
//         idActividad: 1,
//         title: 'Activity 1',
//         start: '2023-05-01',
//         end: '2023-05-02',
//         color: '#cdb4db',
//         id_Lugar: 1,
//         coordinador: 1,
//         nombre_coordinador: 'John Doe',
//         nombre_lugar: 'Place 1',
//         direccion_lugar: 'Address 1',
//         aforo: 100,
//         nombre_proveedor: 'Provider 1',
//         id_Proveedor: 1,
//         idNuevaActividad: 1,
//         id_Relacion_Proveedor: 1,
//       },
//       // Add more mock activities as needed
//     ];
//     component.eventsModel = mockActivities;
//     component.currentDate = new Date('2023-05-01');

//     component.filterEvents();

//     expect(component.filteredEvents).toEqual(mockActivities);
//   });

//   it('should update calendar options with filtered events', () => {
//     const mockFilteredEvents: Activities[] = [
//       {
//         idActividad: 1,
//         title: 'Activity 1',
//         start: '2023-05-01',
//         end: '2023-05-02',
//         color: '#cdb4db',
//         id_Lugar: 1,
//         coordinador: 1,
//         nombre_coordinador: 'John Doe',
//         nombre_lugar: 'Place 1',
//         direccion_lugar: 'Address 1',
//         aforo: 100,
//         nombre_proveedor: 'Provider 1',
//         id_Proveedor: 1,
//         idNuevaActividad: 1,
//         id_Relacion_Proveedor: 1,
//       },
//       // Add more mock filtered events as needed
//     ];
//     component.filteredEvents = mockFilteredEvents;

//     component.updateCalendarOptions();

//     expect(component.calendarOptions.events).toEqual(mockFilteredEvents.map((event) => ({
//       idActividad: event.idActividad,
//       title: event.title,
//       start: event.start,
//       end: event.end,
//     })));
//   });

//   it('should open modal dialog and refresh activities on apuntarEditar', () => {
//     const mockDialogRef = {
//       afterClosed: () => of(true),
//     };
//     const mockDialog = {
//       open: jasmine.createSpy('open').and.returnValue(mockDialogRef),
//     };
//     spyOn(component, 'getActivities');

//     component.apuntarEditar(1);

//     expect(mockDialog.open).toHaveBeenCalledWith(ModalFalleroActivityComponent, {
//       width: '50%',
//       disableClose: true,
//       data: { id: 1, boton: true },
//     });

//     mockDialogRef.afterClosed().subscribe(() => {
//       expect(component.getActivities).toHaveBeenCalled();
//     });
//   });

//   it('should display a snackbar message when deleteExit is called', () => {
//     const mockSnackBar = {
//       open: jasmine.createSpy('open'),
//     };
//     component.horizontalPosition = 'center';
//     component.verticalPosition = 'bottom';

//     component.deleteExit();

//     expect(mockSnackBar.open).toHaveBeenCalledWith(
//       'La actividad ha sido eliminada con éxito ',
//       '',
//       {
//         duration: 5000,
//         horizontalPosition: 'center',
//         verticalPosition: 'bottom',
//       }
//     );
//   });
// });
