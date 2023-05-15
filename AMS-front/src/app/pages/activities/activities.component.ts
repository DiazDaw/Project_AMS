import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';
import timeGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/daygrid';
import { ActivitiesService } from 'src/app/services/activities.service';
import { Activities } from 'src/app/interfaces/activities.interface';
import { BackgroundColorDirective } from '../../directives/background-color.directive';




@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})

export class ActivitiesComponent implements OnInit {

  description: string = 'Hola mundo';
  eventsModel: Activities[] = [];
  currentDate: Date = new Date();

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

  constructor(private _activitiesService: ActivitiesService) { }

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
        title: event.title,
        start: event.start,
        end: event.end
      };
    });
  }

  getRandomColor(): string {
    const arrayColors: string[] = ['#cdb4db', '#ffc8dd', '#ffafcc', '#bde0fe', '#a2d2ff'];
    const randomIndex = Math.floor(Math.random() * arrayColors.length);
    return arrayColors[randomIndex];
  }


};


  // addEvent() {
  //   this.filteredEvents.push({ title: 'Nuevo evento', start: '2023-05-15' });
  //   this.calendarOptions.events = this.filteredEvents.map((event, index) => {
  //     return {
  //       ...event,
  //       color: this.arrayColors[index % this.arrayColors.length]
  //     };
  //   }),
  //     this.calendarOptions = { ...this.calendarOptions };
  //   console.log(this.arrayEvents);
  // }
