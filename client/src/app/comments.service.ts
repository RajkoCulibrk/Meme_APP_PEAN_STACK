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
  url: string = 'https://rajko-meme-app.herokuapp.com/api/comments/';
  loadingComments: boolean;
  comments: Comment[] = [];
  loadingSubcomments: boolean = true;
  subcomments: Comment[] = [];
  singleCommentExists: boolean = false;
  constructor(private http: HttpClient, private location: Location) {}
  /* get all coments of a post based on its id */
  getAllComments(id) {
    /* set loading comments to true so we can show a spinner */
    this.loadingComments = true;
    this.http
      .get<{ data: { comments: Comment[] } }>(this.url + 'post/' + id)
      .pipe(
        map(
          (x) => {
            this.comments = x.data.comments;
            /* set loading comments to false */
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
  /* like or dislike a comment based on the action provided */
  likeDislikeComment(id, action) {
    return this.http.post(this.url + 'likedislike/' + id, { action }).pipe(
      map((x: { data: { status: number } }) => {
        return x.data.status;
      })
    );
  }
  /* check if a comment is liked or disliked by the user or neither */
  checkLikeDislike(id) {
    return this.http
      .get(this.url + 'likedislike/' + id /* , { headers } */)
      .pipe(
        map((x: { data: { status: number } }) => {
          return x.data.status;
        })
      );
  }

  /* delete a comment based on its id */
  deleteComment(id, partOfPreviewComponent?) {
    this.http.delete(this.url + id).subscribe(
      (x) => {
        /* if partOfPreviewComponent true send user back to rpevious page after deletion */
        if (partOfPreviewComponent) {
          this.location.back();
          this.singleCommentExists = false;
        }
        /* the following code deletes the comment from comments array and subcomments array if it exists the so we do not see it  on screen anymore */
        let indexInComments = this.comments.findIndex(
          (x) => x.comment_id == id
        );
        let indexInSubcomments = this.subcomments.findIndex(
          (x) => x.comment_id == id
        );

        this.comments.splice(indexInComments, 1);
        this.subcomments.splice(indexInSubcomments, 1);
        /* removing comments that are replies to this comment */
        this.removeDependingComments(id);
        this.removeDependingSubcomments(id);
      },
      (e) => {
        console.log(e);
      }
    );
  }

  /* remove comments that are replies to the comment the id parameter belogs to */
  removeDependingComments(id) {
    let dependingComments = this.comments.filter((c) => c.reply_to == id);
    dependingComments.forEach((d) => {
      let index = this.comments.findIndex((c) => c.comment_id == d.comment_id);
      this.comments.splice(index, 1);
      this.removeDependingComments(d.comment_id);
    });
  }
  /* remove comments that are replies to the comment the id parameter belogs to */
  removeDependingSubcomments(id) {
    let dependingSubcomments = this.subcomments.filter((c) => c.reply_to == id);
    dependingSubcomments.forEach((d) => {
      let index = this.subcomments.findIndex(
        (c) => c.comment_id == d.comment_id
      );
      this.subcomments.splice(index, 1);
    });
  }

  /* post a new comment */
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
  /* get single comment based on id */
  getSingleComment(id): Observable<Comment> {
    return this.http.get<{ data: { comment: Comment } }>(this.url + id).pipe(
      map((x) => {
        return new Comment(x.data.comment);
      })
    );
  }
  /* get all subocments of a comment based on its id */
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
