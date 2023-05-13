import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesRoutingModule } from './activitites-routing.module';
import { FullCalendarModule } from '@fullcalendar/angular';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ActivitiesRoutingModule,
    FullCalendarModule
  ],
  providers: []
})
export class ActivitiesModule { }
