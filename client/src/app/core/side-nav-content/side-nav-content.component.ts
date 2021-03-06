import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/user-service.service';
import {
  faHeart,
  faUserAlt,
  faSignOutAlt,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { NavigationEnd, Router } from '@angular/router';
import { PostsService } from 'src/app/posts-service.service';

import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-side-nav-content',
  templateUrl: './side-nav-content.component.html',
  styleUrls: ['./side-nav-content.component.css'],
})
export class SideNavContentComponent implements OnInit, OnDestroy {
  faHeart = faHeart;
  faUserAlt = faUserAlt;
  faSignOutAlt = faSignOutAlt;
  faPlus = faPlus;
  currentRoute;
  subscription: Subscription;

  constructor(
    public userProvider: UserService,
    public postsProvider: PostsService,
    private router: Router,

    public location: Location
  ) {}
  /* get current route so we can dinamicly display side nav comment */
  ngOnInit(): void {
    this.currentRoute = this.location.path() || '/';
    this.subscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (event.url) {
          this.currentRoute = event.url || '/';
        }
      });
  }

  /* logout user */
  logout() {
    this.userProvider.logout();
  }

  /* stop event propagation */
  preventPropagation(e) {
    e.stopPropagation();
  }
  /* set order by value and reset pagination parameters and the posts aray to []  and get posts again with those new parameters*/
  setOrderBy(e) {
    this.postsProvider.order_by = e.target.value;
    this.postsProvider.page = 1;
    this.postsProvider.posts.length = 0;
    this.postsProvider.getPosts();
  }
  /* the same as setOrderBy */
  setOrder(e) {
    this.postsProvider.order = e.target.value;
    this.postsProvider.page = 1;
    this.postsProvider.posts.length = 0;
    this.postsProvider.getPosts();
  }
  /* on unmount unsubscribe from listening to rout changes*/
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
