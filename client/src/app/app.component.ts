import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts-service.service';
import { UserService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'client';
  sideNavShowing = false;
  current = 0;
  constructor(
    private userService: UserService,
    private postsProvider: PostsService
  ) {}
  ngOnInit() {
    this.userService.getUser();
    this.regulate();
    this.postsProvider.getPosts();
  }
  toggleSideNav(e) {
    this.sideNavShowing = e;
  }

  regulate() {
    let nav = document.querySelector('.navbar') as HTMLElement;
    document.addEventListener('scroll', () => {
      let scrolled = window.pageYOffset;
      if (this.current - scrolled < 0) {
        nav.style.transform = 'translateY(-120%)';
      } else {
        nav.style.transform = 'translateY(0%)';
      }
      this.current = window.pageYOffset;
    });
  }
}
