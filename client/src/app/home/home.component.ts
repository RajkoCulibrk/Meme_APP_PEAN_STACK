import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Post } from '../models/Post';
import { PostsService } from '../posts-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts: Post[];
  constructor(private provider: PostsService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.provider.getPosts().subscribe(
      (x) => {
        this.posts = x.posts;
      },
      (e) => {
        console.log(e);
      }
    );
  }
}
