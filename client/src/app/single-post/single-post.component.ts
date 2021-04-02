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
    /* get the current url so we can dinamiclz display delete button (only on my posts page) */
    this.currentRoute = this.router.url;
    /* if user is logged in check if he has liked or disliked the post */
    if (this.userService.user) {
      this.checkLikeDislike(this.post.post_id);
    }
  }
  /* like or dislike a single post */
  likeDislike(action) {
    if (!this.userService.user) {
      this.userService.setError('Please sign in first!');
      this.router.navigateByUrl('/signin');
      return;
    }

    this.postsService.likeDislikePost(this.post.post_id, action).subscribe(
      (x) => {
        /* complicated checks I know :) for checking should we increment , decrement likes or dislikes number of a single comment there is a certain number of combination of cases . Maybe there was a better implementation but i went with this one. If the server response was different it could have been easeier i guess. */
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
        /* set liked value to the value of respnse from server */
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

  /* delete single post based on its id */
  deletePost() {
    this.postsService.deletePost(this.post.post_id).subscribe(
      (x) => {
        /* remove the deleted post from posts and myPosts array if it exists there so we do not have to refresh the page or refetch data */
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
