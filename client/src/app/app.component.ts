import { Component, OnInit } from '@angular/core';
import { UserService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'client';
  sideNavShowing = false;

  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.getUser();
  }
  toggleSideNav(e) {
    console.log('kurcina');

    this.sideNavShowing = e;
  }
}
