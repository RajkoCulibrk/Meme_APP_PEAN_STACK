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
    /* on init set up infinite scrolling */
    this.infiniteScrolling();
  }

  /* get all posts based on pagination params */
  getPosts() {
    this.provider.getPosts();
  }

  /* function to be added to sroll eventlistener om document fires a getPosts function if certain conditions are met */
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

  /* add scroll event  listener to document  */
  infiniteScrolling() {
    document.addEventListener('scroll', this.scrollFunc);
  }

  /* when the component unmounts we remove the scroll event listener from the document because we want it to fire only when we are on the homepage */
  ngOnDestroy() {
    document.removeEventListener('scroll', this.scrollFunc);
  }
}
