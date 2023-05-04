import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponseModel } from 'src/app/models/login.model';
import { BlogService } from 'src/app/services/blog.service';
import { InfoUserService } from 'src/app/services/infoUser.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  dashboardIcon!: string;

  @Output() showContent = new EventEmitter<boolean>();

  sessionStorageResponse?: any;

  loginResponseModel?: LoginResponseModel;

  constructor(private _blogService: BlogService, private router: Router, public _infoUserService?: InfoUserService) { }

  ngOnInit(): void {
    this.getUserInfo();
  }
  
  loginNavigate() {
    this.router.navigate(['/login']);
  }

  getUserInfo() {
    //Recuperamos la info del local storage
    this.sessionStorageResponse = sessionStorage.getItem('loginResponse');

    // Si se encontraron datos en local storage, convertirlos a un objeto LoginResponseModel
    if (this.sessionStorageResponse) {
      this.loginResponseModel = new LoginResponseModel(JSON.parse(this.sessionStorageResponse));
    }
  }


}
