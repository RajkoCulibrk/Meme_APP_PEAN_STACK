import { Component, OnDestroy, OnInit } from '@angular/core';

import { PostsService } from '../posts-service.service';
import { UserService } from '../user-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  /*  posts: Post[]; */
  constructor(
    public provider: PostsService,
    public userProvider: UserService
  ) {}

  ngOnInit(): void {
    this.infiniteScrolling();
    /*    if (document.documentElement.scrollHeight.toString()) {
      this.getPosts();
    } */
  }

  getPosts() {
    this.provider.getPosts();
  }

  scrollFunc = () => {
    let height = document.documentElement.scrollHeight;

    let scrolled = window.pageYOffset + window.innerHeight;
    if (
      height - 100 < scrolled &&
      !this.provider.loadingPosts &&
      !this.provider.noContent
    ) {
      this.getPosts();
    }
  };

  infiniteScrolling() {
    document.addEventListener('scroll', this.scrollFunc);
  }

  ngOnDestroy() {
    document.removeEventListener('scroll', this.scrollFunc);
  }
}
