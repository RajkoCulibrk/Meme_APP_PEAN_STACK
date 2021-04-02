import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import { PostsService } from '../posts-service.service';

@Component({
  selector: 'app-my-memes',
  templateUrl: './my-memes.component.html',
  styleUrls: ['./my-memes.component.css'],
})
export class MyMemesComponent implements OnInit {
  constructor(public postsProvider: PostsService) {}

  ngOnInit(): void {
    this.getMyPosts();
  }
  /* get posts of a logged in user */
  getMyPosts() {
    this.postsProvider.getMyPosts();
  }
}
