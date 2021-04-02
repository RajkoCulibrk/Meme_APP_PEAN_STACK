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
  /* get the id of a post the comment belongs to and than run the function for getting the single comment */
  getPostId() {
    this.route.params.pipe(map((p) => p.id)).subscribe((x) => {
      this.comment_id = x;
      this.loadingComment = true;
      this.getSingleComment();
    });
  }
  /* get the date about a single comment we are previewing */
  getSingleComment() {
    this.commentsService.getSingleComment(this.comment_id).subscribe(
      (x) => {
        this.comment = x;
        /* after add new comment to the beginning subcomments an comments aray  */
        this.commentsService.getAllComments(this.comment.post_id);
        this.commentsService.getSubcomments(this.comment.comment_id);
        this.loadingComment = false;
        /* set singleCommentExists to true se we can display the comment we are previewing and not 404 message */
        this.commentsService.singleCommentExists = true;
      },
      (e) => {
        this.loadingComment = false;
        this.error = e.error.msg;
      }
    );
  }
  /* go back to previous page */
  goBack() {
    this.location.back();
  }
}
