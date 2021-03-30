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
  kurcina() {
    console.log(this.body);
  }

  postComment() {
    if (!this.userService.user) {
      this.userService.setError('Please sign in first!');
      this.router.navigateByUrl('/signin');
      return;
    }
    this.commentsProvider.postComment(
      this.body,
      this.postId,
      this.comment?.comment_id
    );
    this.body = '';
  }
}
