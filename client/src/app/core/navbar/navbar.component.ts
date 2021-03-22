import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user-service.service';
import {
  faPen,
  faUserPlus,
  faSignOutAlt,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  currentRoute;
  faPen = faPen;
  faSignOutAlt = faSignOutAlt;
  faUserPlus = faUserPlus;
  faSignInAlt = faSignInAlt;
  constructor(public provider: UserService, private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.url;
      });
  }
}
