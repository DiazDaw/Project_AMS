import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { Post } from 'src/app/interfaces/post.interface';
import { InfoUserService } from 'src/app/services/infoUser.service';
import { LoginResponseModel } from 'src/app/models/login.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  postsBlog: Post[] = [];
  token = localStorage.getItem('token');
  dni: string = '';

  localStorageResponse?: any;

  loginResponseModel?: LoginResponseModel;

  constructor(private _blogService: BlogService, private route: Router, public _infoUserService?: InfoUserService) { }

  ngOnInit(): void {
    this.getAllPost();
    this.getUserInfo();
  }

  getUserInfo() {
    //Recuperamos la info del local storage
    this.localStorageResponse = localStorage.getItem('loginResponse');

    // Si se encontraron datos en local storage, convertirlos a un objeto LoginResponseModel
    if (this.localStorageResponse) {
      this.loginResponseModel = new LoginResponseModel(JSON.parse(this.localStorageResponse));
    }
  }

  getAllPost() {
    this._blogService.getPost().subscribe(
      response => {
        this.postsBlog = response;
      });
  }

}
