import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CommentsService } from '../comments.service';
import { Comment } from '../models/Comment';

@Component({
  selector: 'app-single-comment-preview',
  templateUrl: './single-comment-preview.component.html',
  styleUrls: ['./single-comment-preview.component.css'],
})
export class SingleCommentPreviewComponent implements OnInit {
  comment_id;
  loadingComment: boolean = true;
  error: string;
  comment: Comment;

  constructor(
    private route: ActivatedRoute,
    public commentsService: CommentsService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPostId();
  }

  getPostId() {
    this.route.params.pipe(map((p) => p.id)).subscribe((x) => {
      this.comment_id = x;
      this.loadingComment = true;
      this.getSingleComment();
    });
  }

  getSingleComment() {
    this.commentsService.getSingleComment(this.comment_id).subscribe(
      (x) => {
        this.comment = x;
        this.commentsService.getAllComments(this.comment.post_id);
        this.commentsService.getSubcomments(this.comment.comment_id);
        this.loadingComment = false;
        this.commentsService.singleCommentExists = true;
      },
      (e) => {
        this.loadingComment = false;
        this.error = e.error.msg;
      }
    );
  }

  goBack() {
    this.location.back();
  }
}
