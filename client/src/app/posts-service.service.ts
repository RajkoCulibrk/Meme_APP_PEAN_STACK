import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './models/Post';
import { PostsList } from './models/PostsList';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  url: string = 'http://localhost:3000/api/posts/';
  page = 1;
  order_by = 'created_at';
  order = 2;
  like = '';
  posts: Post[] = [];
  loadingPosts: boolean = false;
  noContent = false;
  constructor(private http: HttpClient) {}

  getPosts() {
    this.loadingPosts = true;
    let params = new HttpParams()
      .set('page', this.page.toString())
      .set('order_by', this.order_by)
      .set('order', this.order.toString())
      .set('like', this.like);

    this.http
      .get<{ data: { posts: Post } }>(this.url, { params: params })
      .pipe(
        map((x) => {
          return new PostsList(x.data);
        })
      )
      .subscribe(
        (x) => {
          if (!x.posts.length) {
            this.noContent = true;
          } else {
            this.noContent = false;
          }
          x.posts.forEach((p) => {
            this.posts.push(p);
          });
          this.loadingPosts = false;
        },
        (e) => {
          this.loadingPosts = false;
          console.log(e);
        }
      );
  }

  getSinglePost(id): Observable<Post> {
    return this.http.get<{ data: { post: Post } }>(this.url + id).pipe(
      map((x) => {
        return new Post(x.data.post);
      })
    );
  }

  checkLikeDislike(id) {
    /*   const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }); */
    return this.http
      .get(this.url + 'likedislike/' + id /* , { headers } */)
      .pipe(
        map((x: { data: { status: number } }) => {
          return x.data.status;
        })
      );
  }

  likeDislikePost(id, action) {
    return this.http.post(this.url + 'likedislike/' + id, { action }).pipe(
      map((x: { data: { status: number } }) => {
        return x.data.status;
      })
    );
  }

  addNewPost(formData: FormData): Observable<Post> {
    return this.http.post(this.url, formData).pipe(
      map((x: { data: { post: Post } }) => {
        return new Post(x.data.post);
      })
    );
  }
}
