import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Post } from '../models/Post';
import { PostsService } from '../posts-service.service';
import { UserService } from '../user-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  /*  posts: Post[]; */
  constructor(
    public provider: PostsService,
    public userProvider: UserService
  ) {}

  ngOnInit(): void {
    this.infiniteScrolling();
  }

  getPosts() {
    this.provider.getPosts();
    this.provider.page++;
  }

  infiniteScrolling() {
    let listener = document.addEventListener('scroll', () => {
      let height = document.documentElement.scrollHeight;
      let scrolled = window.pageYOffset + window.innerHeight;
      if (
        height - 100 < scrolled &&
        !this.provider.loadingPosts &&
        !this.provider.noContent
      ) {
        this.provider.page++;
        this.provider.getPosts();
      }
    });
  }
}
