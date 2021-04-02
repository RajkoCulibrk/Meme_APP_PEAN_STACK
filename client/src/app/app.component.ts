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
    public postsProvider: PostsService
  ) {}
  ngOnInit() {
    /* on initial load of the app we try to get the user data based on the token in the local storage if the token does not exist or it is not valid anymore the funcionality of getUser() function will reset everything and loggout the user automaticly */
    this.userService.getUser();
    /* set up onscroll event listener */
    this.regulate();
    /* get posts on initial load of the app se we see some post right away */
    this.postsProvider.getPosts();
  }
  /* show hid sidenav */
  toggleSideNav(e) {
    this.sideNavShowing = e;
  }
  /* this function regulates movement of navbar if we scroll down the navbar goes up and disapears and vice-versa , and show back to the top component if we scroll past certain point*/
  regulate() {
    let nav = document.querySelector('.navbar') as HTMLElement;
    document.addEventListener('scroll', () => {
      let scrolled = window.pageYOffset;
      if (scrolled > 1000) {
        this.postsProvider.showToTheTop = true;
      } else {
        this.postsProvider.showToTheTop = false;
      }
      if (this.current - scrolled < 0) {
        nav.style.transform = 'translateY(-120%)';
      } else {
        nav.style.transform = 'translateY(0%)';
      }
      this.current = window.pageYOffset;
    });
  }
}
