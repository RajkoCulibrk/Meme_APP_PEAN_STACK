import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  postId: number;

  constructor(
    public commentsProvider: CommentsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPostId();
    /* get all coments based on the id from hte route */
    this.commentsProvider.getAllComments(this.postId);
  }
  /* get post id from the route */
  getPostId() {
    this.route.params.pipe(map((p) => p.id)).subscribe((x) => {
      this.postId = x;
    });
  }
}
