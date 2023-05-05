import { Component } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
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
}

