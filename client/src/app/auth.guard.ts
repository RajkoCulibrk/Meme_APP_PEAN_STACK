import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserService } from './user-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private userProvider: UserService, private router: Router) {}
  /* allow user to go to certain pages only if the user is logged in else redirect him to signin page and display message Please sing in */
  canActivate(): boolean {
    let user = localStorage.getItem('user');
    if (user) {
      return true;
    } else {
      this.userProvider.setError('Please log in to see this page !');
      this.router.navigateByUrl('/signin');

      return false;
    }
  }
}
