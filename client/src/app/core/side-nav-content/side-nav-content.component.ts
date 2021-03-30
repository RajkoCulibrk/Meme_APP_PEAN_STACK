import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user-service.service';
import {
  faHeart,
  faUserAlt,
  faSignOutAlt,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { Event } from '@angular/router';
import { PostsService } from 'src/app/posts-service.service';
@Component({
  selector: 'app-side-nav-content',
  templateUrl: './side-nav-content.component.html',
  styleUrls: ['./side-nav-content.component.css'],
})
export class SideNavContentComponent implements OnInit {
  faHeart = faHeart;
  faUserAlt = faUserAlt;
  faSignOutAlt = faSignOutAlt;
  faPlus = faPlus;
  constructor(
    public userProvider: UserService,
    public postsProvider: PostsService
  ) {}

  ngOnInit(): void {}

  logout() {
    this.userProvider.logout();
  }

  preventPropagation(e) {
    e.stopPropagation();
  }

  setOrderBy(e) {
    this.postsProvider.order_by = e.target.value;
    this.postsProvider.page = 1;
    this.postsProvider.posts.length = 0;
    this.postsProvider.getPosts();
  }

  setOrder(e) {
    this.postsProvider.order = e.target.value;
    this.postsProvider.page = 1;
    this.postsProvider.posts.length = 0;
    this.postsProvider.getPosts();
  }
}
