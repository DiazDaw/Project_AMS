import { Component } from '@angular/core';
import { UserLoginService } from '../app/services/user-login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'AMS-front';

  dashboardIcon = "account_circle";

  constructor(private _loginService: UserLoginService){}

  get isLoggedIn() {
    if(this._loginService.isLoggedIn === true){
      this.dashboardIcon = "menu";
      return true;
    } else{
      return false;
    }
    
  }

}