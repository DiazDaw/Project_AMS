import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input()
  dashboardIcon!: string;

  @Output() showContent = new EventEmitter<boolean>();

  constructor(private router: Router) { }
  
  loginNavigate() {
    this.router.navigate(['/login']);
  }


}
