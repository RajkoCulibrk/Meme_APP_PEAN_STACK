import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/User';
import { map, filter } from 'rxjs/operators';
import { Token } from './models/Token';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'https://rajko-meme-app.herokuapp.com/api/auth/';
  user: User = null;
  token: string = null;
  errors: { id: number; message: string }[] = [];
  constructor(private http: HttpClient, private router: Router) {}

  /* register a new user */
  register(credentials): void {
    this.http
      .post<Token>(this.url + 'register', credentials)
      .pipe(
        map((x) => {
          return x;
        })
      )
      .subscribe(
        (x) => {
          /* get token from the response and set its value to local storage */
          this.token = x.data.token;
          localStorage.setItem('token', x.data.token);
          /* navigate to homepage and get user data */
          this.router.navigateByUrl('/');
          this.getUser();
        },
        (e) => {
          /* in case of error set error message and remove user and token from local storrage */
          this.setError(e.error.msg);
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        }
      );
  }
  /* login user gets an authoriyation token in the response */
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
          /* get token from the response and set it to local storage , get user data navigate to home */
          this.token = x;
          localStorage.setItem('token', this.token);
          this.getUser();
          this.router.navigateByUrl('/');
        },
        (e) => {
          /* set error message remove user and token from local storage */
          console.log(e.error.msg);
          this.setError(e.error.msg);

          localStorage.removeItem('token');
          localStorage.removeItem('user');
        }
      );
  }

  /* add new error to error array */
  setError(message): void {
    /* generate unique id for the new error message */
    let id = Date.now();
    this.errors.push({ id, message });
    /* after adding error to array we want to delete it after some time in this case 3 secs se we set tiemeount to it  from the error array */
    let t = setTimeout(() => {
      let errorIndex = this.errors.findIndex((e) => e.id == id);
      this.errors.splice(errorIndex, 1);

      clearTimeout(t);
    }, 3000);
  }
  /* get data about user based on authorization token from the local storrage set by the http interceptor */
  getUser(): void {
    this.http
      .get<{ data: { user: User } }>(this.url + 'user')
      .pipe(
        map((x) => {
          return x;
        })
      )
      .subscribe(
        (x) => {
          /* get user from response and set it to local storrage */
          this.user = x.data.user;
          localStorage.setItem('user', JSON.stringify(this.user));
        },
        (e) => {
          console.log(e);
          /* in case of error remove token and user from localstorrage */
          localStorage.removeItem('user');
          localStorage.removeItem('token');
        }
      );
  }
  /* logout functionality */
  logout() {
    (this.user = null), (this.token = null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
