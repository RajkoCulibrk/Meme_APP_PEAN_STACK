import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from './models/Comment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GetCommentsServer } from './models/GetCommentsServer';
import { Location } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  url: string = 'http://localhost:3000/api/comments/';
  loadingComments: boolean;
  comments: Comment[] = [];
  loadingSubcomments: boolean = true;
  subcomments: Comment[] = [];
  singleCommentExists: boolean = false;
  constructor(private http: HttpClient, private location: Location) {}

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

  deleteComment(id, partOfPreviewComponent?) {
    this.http.delete(this.url + id).subscribe(
      (x) => {
        if (partOfPreviewComponent) {
          this.location.back();
          this.singleCommentExists = false;
        }
        let indexInComments = this.comments.findIndex(
          (x) => x.comment_id == id
        );
        let indexInSubcomments = this.subcomments.findIndex(
          (x) => x.comment_id == id
        );

        this.comments.splice(indexInComments, 1);
        this.subcomments.splice(indexInSubcomments, 1);
        this.removeDependingComments(id);
        this.removeDependingSubcomments(id);
      },
      (e) => {
        console.log(e);
      }
    );
  }

  removeDependingComments(id) {
    let dependingComments = this.comments.filter((c) => c.reply_to == id);
    dependingComments.forEach((d) => {
      let index = this.comments.findIndex((c) => c.comment_id == d.comment_id);
      this.comments.splice(index, 1);
      this.removeDependingComments(d.comment_id);
    });
  }

  removeDependingSubcomments(id) {
    let dependingSubcomments = this.subcomments.filter((c) => c.reply_to == id);
    dependingSubcomments.forEach((d) => {
      let index = this.subcomments.findIndex(
        (c) => c.comment_id == d.comment_id
      );
      this.subcomments.splice(index, 1);
    });
  }

  postComment(body, post_id, reply_to?) {
    let payload = { body, post_id };
    if (reply_to) {
      payload['reply_to'] = reply_to;
    }
    return this.http
      .post<{ data: { comment: Comment } }>(this.url, payload)
      .pipe(
        map((x) => {
          return new Comment(x.data.comment);
        })
      )
      .subscribe(
        (x) => {
          this.comments.unshift(x);
          this.subcomments.unshift(x);
          let index = this.comments.findIndex(
            (c) => c.comment_id == x.reply_to
          );

          if (index > 0) {
            this.comments[index].subcomments++;
          }
        },
        (e) => {
          console.log(e);
        }
      );
  }

  getSingleComment(id): Observable<Comment> {
    return this.http.get<{ data: { comment: Comment } }>(this.url + id).pipe(
      map((x) => {
        return new Comment(x.data.comment);
      })
    );
  }

  getSubcomments(id) {
    return this.http
      .get<GetCommentsServer>(this.url + 'subcomments/' + id)
      .pipe(
        map((x) => {
          return new GetCommentsServer(x);
        })
      )
      .subscribe((x) => {
        this.subcomments = x.data.comments;
        this.loadingSubcomments = false;
      });
  }
}
