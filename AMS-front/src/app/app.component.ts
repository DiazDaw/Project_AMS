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

  getToken(){
    const token = localStorage.getItem('token');

    if(token == undefined){
      return false;
    } else {
      this.dashboardIcon = "menu";
      return true;
    }
    
  }

}