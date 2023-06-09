import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';
import timeGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/daygrid';
import { ActivitiesService } from 'src/app/services/activities.service';
import { Activities } from 'src/app/interfaces/activities.interface';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ModalFalleroActivityComponent } from './modal-fallero-activity/modal-fallero-activity.component';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})

export class ActivitiesComponent implements OnInit {

  description: string = 'Hola mundo';
  eventsModel: Activities[] = [];
  currentDate: Date = new Date();

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  filteredEvents: Activities[] = [];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    weekends: true,
    events: [],
    eventTextColor: 'black',
    locale: esLocale,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title'
    }
  }

  constructor(private _activitiesService: ActivitiesService, private router: Router,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities() {
    this._activitiesService.getEvents().subscribe(
      response => {
        this.eventsModel = response;
        this.filteredEvents = this.filterEvents();
        setTimeout(() => {
          this.updateCalendarOptions();
        }, 0);
      }
    );
  }

  filterEvents(): Activities[] {
    return this.eventsModel.filter(event => {
      const eventStartDate = new Date(event.start);
      return eventStartDate >= this.currentDate;
    });
  }

  updateCalendarOptions(): void {
    this.calendarOptions.events = this.filteredEvents.map((event, index) => {
      return {
        idActividad: event.idActividad,
        title: event.title,
        start: event.start,
        end: event.end
      };
    });
  }

  getRandomColor(): string {
    const arrayColors: string[] = ['#cdb4db', '#ffc8dd', '#ffafcc', '#bde0fe', '#a2d2ff', '#0fa3b1','#8e7dbe','#ff7477','#95d387', '#eddea4', '#f7a072'];
    const randomIndex = Math.floor(Math.random() * arrayColors.length);
    return arrayColors[randomIndex];
  }

  apuntarEditar(id?: number) {
    const idActividad = id// Acceder al ID de la actividad
    console.log('ID de la actividad:', idActividad);
    const dialogRef = this.dialog.open(ModalFalleroActivityComponent, {
      width: '500%',
      disableClose: true,
      data: { id: id, boton: true }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getActivities();
      }
    });

  }

  deleteExit() {
    this._snackBar.open('La actividad ha sido eliminada con éxito ', '', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }
};
