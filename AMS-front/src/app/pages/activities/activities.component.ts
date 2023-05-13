import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';
import timeGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  description: string = 'Hola mundo';
  arrayColors: string[] = ['#cdb4db', '#ffc8dd', '#ffafcc', '#bde0fe', '#a2d2ff'];
  

  arrayEvents: any[] = [
    { title: 'Ofrenda', start: '2023-05-13', end: '2023-05-16' },
    { title: 'event 2', date: '2023-05-14' }
  ]



  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin ],
    weekends: true,
    events: this.arrayEvents.map((event, index) => {
      return {
        ...event,
        color: this.arrayColors[index % this.arrayColors.length]
      };
    }),
    eventColor: 'red',
    eventTextColor: 'black',
    locale: esLocale,
    headerToolbar:{
      left: 'prev,next today',
      center: 'title'
    }
  }

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.calendarOptions);

  }


  toggleWeekends() {
    this.arrayEvents.push({ title: 'Nuevo evento', date: '2023-05-15' });
    this.calendarOptions.events = this.arrayEvents.map((event, index) => {
      return {
        ...event,
        color: this.arrayColors[index % this.arrayColors.length]
      };
    }),
    this.calendarOptions = { ...this.calendarOptions };
    console.log(this.arrayEvents);
  }

}
