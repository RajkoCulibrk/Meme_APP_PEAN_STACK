import { Component, OnInit } from '@angular/core';
import { UserService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.getUser();
  }
}
