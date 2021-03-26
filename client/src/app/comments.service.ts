import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from './models/Comment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  url: string = 'http://localhost:3000/api/comments/';
  loadingComments: boolean;
  comments: Comment[];
  constructor(private http: HttpClient) {}

  getAllComments(id) {
    this.loadingComments = true;
    this.http
      .get<{ data: { comments: Comment[] } }>(this.url + 'post/' + id)
      .pipe(
        map(
          (x) => {
            this.comments = x.data.comments;
            console.log(x.data.comments);

            this.loadingComments = false;
          },
          (e) => {
            console.log(e);
            this.loadingComments = false;
          }
        )
      )
      .subscribe();
  }

  likeDislikeComment(id, action) {
    return this.http.post(this.url + 'likedislike/' + id, { action }).pipe(
      map((x: { data: { status: number } }) => {
        return x.data.status;
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

  deleteComment(id) {
    this.http.delete(this.url + id).subscribe(
      (x) => {
        let index = this.comments.findIndex((x) => x.comment_id == id);
        this.comments.splice(index, 1);
      },
      (e) => {
        console.log(e);
      }
    );
  }

  postComment(body, post_id, reply_to?): Observable<Comment> {
    let payload = { body, post_id };
    if (reply_to) {
      payload['reply_to'] = reply_to;
      console.log(payload);
    }
    return this.http
      .post<{ data: { comment: Comment } }>(this.url, payload)
      .pipe(
        map((x) => {
          return new Comment(x.data.comment);
        })
      );
  }
}
