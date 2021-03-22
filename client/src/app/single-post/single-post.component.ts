import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent implements OnInit {
  @Input()
  post: Post;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  likeDislike(action) {
    if (!this.userService.user) {
      this.router.navigateByUrl('/signin');
      return;
    }
    console.log('logovan si', action);
  }
}
