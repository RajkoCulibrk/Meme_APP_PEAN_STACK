import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user-service.service';
import { Router } from '@angular/router';
import { PostsService } from '../posts-service.service';
@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent implements OnInit {
  @Input()
  post: Post;
  liked: number;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  constructor(
    private userService: UserService,
    private postsService: PostsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.userService.user) {
      this.checkLikeDislike(this.post.post_id);
    }
  }

  likeDislike(action) {
    if (!this.userService.user) {
      this.router.navigateByUrl('/signin');
      return;
    }
    if (this.liked == action) {
      action = 'delete';
    }
    this.postsService.likeDislikePost(this.post.post_id, action).subscribe(
      (x) => {
        this.liked = x;
      },
      (e) => {
        console.log(e);
      }
    );
    console.log('logovan si', action);
  }

  checkLikeDislike(id) {
    return this.postsService.checkLikeDislike(id).subscribe(
      (x) => {
        this.liked = x;
      },
      (e) => {
        console.log(e);
      }
    );
  }
}
