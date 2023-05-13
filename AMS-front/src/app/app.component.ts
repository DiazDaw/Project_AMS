import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../app/services/user-login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'AMS-front';

  dashboardIcon = "account_circle";

  constructor(private _loginService: UserLoginService){}

  ngOnInit(): void {}

  getToken(){
    const token = sessionStorage.getItem('token');

    if(token == undefined){
      this.dashboardIcon = "account_circle";
      return false;
    } else {
      this.dashboardIcon = "menu";
      return true;
    }
    
  }

}