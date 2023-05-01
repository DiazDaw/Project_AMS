import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  postsBlog: Post[] = [];

  constructor(private _blogService: BlogService, private route: Router){}

  ngOnInit(): void {
    this.getAllPost();
  }

  getAllPost(){
    this._blogService.getPost().subscribe(
      response => {
        this.postsBlog = response;
    });
  }

}
