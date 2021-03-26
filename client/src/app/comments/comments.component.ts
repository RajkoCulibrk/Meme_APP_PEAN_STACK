import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input()
  postId: number;

  constructor(public commentsProvider: CommentsService) {}

  ngOnInit(): void {
    this.commentsProvider.getAllComments(this.postId);
  }
}
