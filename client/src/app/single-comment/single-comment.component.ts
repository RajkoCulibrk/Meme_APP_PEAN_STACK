import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../models/Comment';
import {
  faThumbsUp,
  faThumbsDown,
  faComment,
  faTrash,
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
  liked: number;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faComment = faComment;
  faTrash = faTrash;
  constructor(
    private commentsProvider: CommentsService,
    public userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.userService.user) {
      this.checkLikeDislike(this.comment.comment_id);
    }
  }
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

  likeDislike(action) {
    if (!this.userService.user) {
      this.userService.setError('Please sign in first!');
      this.router.navigateByUrl('/signin');
      return;
    }

    this.commentsProvider
      .likeDislikeComment(this.comment.comment_id, action)
      .subscribe(
        (x) => {
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

          this.liked = x;
        },
        (e) => {
          console.log(e);
        }
      );
  }

  deleteComment() {
    this.commentsProvider.deleteComment(this.comment.comment_id);
  }
}
