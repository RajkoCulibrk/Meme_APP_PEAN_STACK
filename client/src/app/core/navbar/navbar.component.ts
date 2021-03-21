import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user-service.service';
import {
  faPen,
  faUserPlus,
  faSignOutAlt,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  faPen = faPen;
  faSignOutAlt = faSignOutAlt;
  faUserPlus = faUserPlus;
  faSignInAlt = faSignInAlt;
  constructor(public provider: UserService) {}

  ngOnInit(): void {}

  kurcina() {}
}
