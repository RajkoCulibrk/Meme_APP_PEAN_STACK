import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import {
  faThumbsUp,
  faThumbsDown,
  faComment,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user-service.service';
import { Router } from '@angular/router';
import { PostsService } from '../posts-service.service';
import { filter } from 'rxjs/operators';
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
  faComment = faComment;
  faTrashAlt = faTrashAlt;
  currentRoute;
  constructor(
    public userService: UserService,
    private postsService: PostsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentRoute = this.router.url;
    if (this.userService.user) {
      this.checkLikeDislike(this.post.post_id);
    }
  }

  likeDislike(action) {
    if (!this.userService.user) {
      this.userService.setError('Please sign in first!');
      this.router.navigateByUrl('/signin');
      return;
    }

    this.postsService.likeDislikePost(this.post.post_id, action).subscribe(
      (x) => {
        if (this.liked == 2 && action) {
          this.post.likes++;
        }
        if (this.liked == 2 && !action) {
          this.post.dislikes++;
        }
        if (this.liked == 1 && action) {
          this.post.likes--;
        }
        if (this.liked == 0 && !action) {
          this.post.dislikes--;
        }
        if (this.liked == 0 && action) {
          this.post.likes++;
          this.post.dislikes--;
        }
        if (this.liked == 1 && !action) {
          this.post.likes--;
          this.post.dislikes++;
        }

        this.liked = x;
      },
      (e) => {
        console.log(e);
      }
    );
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

  deletePost() {
    this.postsService.deletePost(this.post.post_id).subscribe(
      (x) => {
        let indexInMyPosts = this.postsService.myPosts.findIndex(
          (p) => p.post_id == this.post.post_id
        );
        let indexInAllPosts = this.postsService.posts.findIndex(
          (p) => p.post_id == this.post.post_id
        );
        this.postsService.myPosts.splice(indexInMyPosts, 1);
        this.postsService.posts.splice(indexInAllPosts, 1);
      },
      (e) => {
        console.log(e);
      }
    );
  }
}
