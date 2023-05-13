import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {

  description: string = 'Hola mundo';




  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    weekends: true,

    events: [
      { title: 'Ofrenda', date: '2023-05-13', color: "#ACE600", textColor: "#FF6600" },
      { title: 'event 2', date: '2023-05-14' }
    ],

  }

  constructor() {
    console.log(this.calendarOptions.events);

  }


  toggleWeekends() {
    this.calendarOptions.eventSources?.push({
      events: [
        { title: 'Nuevo evento', date: '2023-05-28', color: "#FF0000", textColor: "#FFFFFF" }
      ]
    });

    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }

}
