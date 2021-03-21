import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'http://localhost:3000/api/auth/';
  user: User = null;
  token: string = null;
  errors: Object[] = [];
  constructor(private http: HttpClient) {}

  register() {}
  login() {}
  logout() {}
}
