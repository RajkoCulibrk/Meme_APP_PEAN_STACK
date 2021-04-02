import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';
import { Comment } from '../models/Comment';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css'],
})
export class PostCommentComponent implements OnInit {
  @Input()
  postId: number;
  @Input()
  comment: Comment;
  body: string;
  faPaperPlane = faPaperPlane;
  constructor(
    private commentsProvider: CommentsService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  postComment() {
    /* if user is not logged in send him to loggin page and siplay an error message */
    if (!this.userService.user) {
      this.userService.setError('Please sign in first!');
      this.router.navigateByUrl('/signin');
      return;
    }
    /* post comment */
    this.commentsProvider.postComment(
      this.body,
      this.postId,
      this.comment?.comment_id
    );
    /* after submitting reset the body to '' (clear the input field) */
    this.body = '';
  }
}
