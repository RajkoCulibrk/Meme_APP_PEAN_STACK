import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../models/Comment';
import {
  faThumbsUp,
  faThumbsDown,
  faComment,
  faTrash,
  faReply,
} from '@fortawesome/free-solid-svg-icons';
import { CommentsService } from '../comments.service';
import { UserService } from '../user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.css'],
})
export class SingleCommentComponent implements OnInit {
  @Input()
  comment: Comment;
  @Input()
  partOfPreviewComponent: boolean;
  /* liked value can be 0 , 1 or 2 if 0 than user has liked the comment if 1 disliked and if 2 neither of those */
  liked: number;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faComment = faComment;
  faTrash = faTrash;
  faReply = faReply;
  showReply = false;
  constructor(
    private commentsProvider: CommentsService,
    public userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    /* if user is signed in we run check if he has liked or disliked the comment */
    if (this.userService.user) {
      this.checkLikeDislike(this.comment.comment_id);
    }
  }
  /* check if user has liked or disliked a comment */
  checkLikeDislike(id) {
    return this.commentsProvider.checkLikeDislike(id).subscribe(
      (x) => {
        this.liked = x;
      },
      (e) => {
        console.log(e);
      }
    );
  }
  /* like or dislike a comment */
  likeDislike(action) {
    /* if user is not logged in send him to loggin page and display a message */
    if (!this.userService.user) {
      this.userService.setError('Please sign in first!');
      this.router.navigateByUrl('/signin');
      return;
    }

    this.commentsProvider
      .likeDislikeComment(this.comment.comment_id, action)
      .subscribe(
        (x) => {
          /* complicated checks I know :) for checking should we increment , decrement likes or dislikes number of a single comment there is a certain number of combination of cases . Maybe there was a better implementation but i went with this one. If the server response was different it could have been easeier i guess. */
          if (this.liked == 2 && action) {
            this.comment.likes++;
          }
          if (this.liked == 2 && !action) {
            this.comment.dislikes++;
          }
          if (this.liked == 1 && action) {
            this.comment.likes--;
          }
          if (this.liked == 0 && !action) {
            this.comment.dislikes--;
          }
          if (this.liked == 0 && action) {
            this.comment.likes++;
            this.comment.dislikes--;
          }
          if (this.liked == 1 && !action) {
            this.comment.likes--;
            this.comment.dislikes++;
          }
          /* set the value of liked value to the value from the server response */
          this.liked = x;
        },
        (e) => {
          console.log(e);
        }
      );
  }
  /* hide or show the reply to comment component */
  setShowReply() {
    this.showReply = !this.showReply;
  }
  /* delete a comment */
  deleteComment() {
    this.commentsProvider.deleteComment(
      this.comment.comment_id,
      this.partOfPreviewComponent
    );
  }
}
