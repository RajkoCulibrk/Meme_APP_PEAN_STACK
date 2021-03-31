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
  /*  @Input() */
  postId: number;

  constructor(
    public commentsProvider: CommentsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPostId();
    this.commentsProvider.getAllComments(this.postId);
  }
  getPostId() {
    this.route.params.pipe(map((p) => p.id)).subscribe((x) => {
      this.postId = x;
    });
  }
}
