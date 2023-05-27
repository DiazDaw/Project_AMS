import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent {

  constructor(private route: Router) {
    
  }

  usersAdminNavigate() {
    this.route.navigate(['/admin/users']);
  }

  activitiesAdminNavigate() {
    this.route.navigate(['/admin/actividades']);
  }

  partnersAdminNavigate() {
    this.route.navigate(['/admin/partners']);
  }

  placesAdminNavigate() {
    this.route.navigate(['/admin/places']);
  }

  worksAdminNavigate() {
    this.route.navigate(['/admin/works']);
  }

  BlogAdminNavigate(){
    this.route.navigate(['/admin/blog'])
  }

  emailAdminNavigate(){
    window.open('https://outlook.live.com/mail/0/', '_blank');
  }
}

