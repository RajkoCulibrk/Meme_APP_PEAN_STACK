import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/user-service.service';
import {
  faHamburger,
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
  faHamburger = faHamburger;
  faSignOutAlt = faSignOutAlt;
  faUserPlus = faUserPlus;
  faSignInAlt = faSignInAlt;
  sideNavShowing = false;
  @Output()
  showHideSideNav = new EventEmitter<boolean>();
  constructor(public provider: UserService, private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.url;
      });
  }

  toggleSideNav() {
    this.showHideSideNav.emit(!this.sideNavShowing);
    this.sideNavShowing = !this.sideNavShowing;
  }
}
