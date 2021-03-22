import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './models/Post';
import { PostsList } from './models/PostsList';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  url: string = 'http://localhost:3000/api/';
  constructor(private http: HttpClient) {}

  getPosts(): Observable<PostsList> {
    return this.http.get<{ data: { posts: Post } }>(this.url + 'posts').pipe(
      map((x) => {
        return new PostsList(x.data);
      })
    );
  }
}
