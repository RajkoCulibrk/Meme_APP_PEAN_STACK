import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/User';
import { map, filter } from 'rxjs/operators';
import { Token } from './models/Token';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'http://localhost:3000/api/auth/';
  user: User = null;
  token: string = null;
  errors: { id: number; message: string }[] = [];
  constructor(private http: HttpClient) {}

  register(credentials): void {
    this.http
      .post<Token>(this.url + '/register', credentials)
      .pipe(
        map((x) => {
          return x;
        })
      )
      .subscribe(
        (x) => {
          this.token = x.data.token;
          localStorage.setItem('token', x.data.token);
          console.log(this.token);

          this.getUser();
        },
        (e) => {
          this.setError(e.error.msg);
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        }
      );
  }
  login(credentials) {
    return this.http
      .post<Token>(this.url + 'login', credentials)
      .pipe(
        map((x) => {
          return x.data.token;
        })
      )
      .subscribe(
        (x) => {
          this.token = x;
          localStorage.setItem('token', this.token);
          this.getUser();
          console.log(x);
        },
        (e) => {
          console.log(e.error.msg);
          this.setError(e.error.msg);
          console.log(this.errors);

          localStorage.removeItem('token');
          localStorage.removeItem('user');
        }
      );
  }
  setError(message): void {
    let id = Date.now();
    this.errors.push({ id, message });
    let t = setTimeout(() => {
      this.errors.length = 0;
      clearTimeout(t);
    }, 3000);
  }
  getUser(): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    this.http
      .get<{ data: { user: User } }>(this.url + '/user', { headers: headers })
      .pipe(
        map((x) => {
          return x;
        })
      )
      .subscribe(
        (x) => {
          this.user = x.data.user;
          localStorage.setItem('user', JSON.stringify(this.user));
        },
        (e) => {
          console.log(e);

          localStorage.removeItem('user');
          localStorage.removeItem('token');
        }
      );
  }
  logout() {
    (this.user = null), (this.token = null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
