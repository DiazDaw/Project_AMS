import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
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
    if(sessionStorage.getItem('loginResponse')){
      this.router.navigate(['/user']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  adminNavigate(){
    if(sessionStorage.getItem('loginResponse')){
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/login']);
    }
  }
  

  getUserInfo() {
    // Recuperamos la info del local storage
    this.sessionStorageResponse = sessionStorage.getItem('loginResponse');

    // Verificamos si existe un valor en sessionStorageResponse
    if (this.sessionStorageResponse) {
      // Convertimos los datos a un objeto LoginResponseModel
      this.loginResponseModel = new LoginResponseModel(JSON.parse(this.sessionStorageResponse));
    } else {
      // Manejamos el caso en el que no hay un valor en sessionStorageResponse
      // Puedes realizar alguna lógica adicional aquí o simplemente dejar la propiedad loginResponseModel como `undefined`
    }
  }


}
