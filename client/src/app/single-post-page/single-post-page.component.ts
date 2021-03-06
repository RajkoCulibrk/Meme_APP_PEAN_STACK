import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { CommentsService } from '../comments.service';
import { Post } from '../models/Post';
import { PostsService } from '../posts-service.service';

@Component({
  selector: 'app-single-post-page',
  templateUrl: './single-post-page.component.html',
  styleUrls: ['./single-post-page.component.css'],
})
export class SinglePostPageComponent implements OnInit {
  post: Post;
  currentPostId: number;

  constructor(
    private postsProvider: PostsService,
    private route: ActivatedRoute,
    public commentsProvider: CommentsService
  ) {}

  ngOnInit(): void {
    this.getPostId();
    this.getPost();
  }
  /* get the post id from the page url */
  getPostId() {
    this.route.params.pipe(map((p) => p.id)).subscribe((x) => {
      this.currentPostId = x;
    });
  }
  /*get single post based on its id  */
  getPost() {
    this.postsProvider.getSinglePost(this.currentPostId).subscribe(
      (x) => {
        this.post = x;
      },
      (e) => {
        console.log(e);
      }
    );
  }
}
