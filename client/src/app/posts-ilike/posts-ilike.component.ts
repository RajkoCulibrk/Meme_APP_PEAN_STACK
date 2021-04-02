import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import { PostsService } from '../posts-service.service';

@Component({
  selector: 'app-posts-ilike',
  templateUrl: './posts-ilike.component.html',
  styleUrls: ['./posts-ilike.component.css'],
})
export class PostsILikeComponent implements OnInit {
  likedPosts: Post[];

  constructor(private postsProvider: PostsService) {}

  ngOnInit(): void {
    this.getPosts();
  }
  /* get liked posts liked by the logged in user */
  getPosts() {
    this.postsProvider.getLikedPosts().subscribe(
      (x) => {
        this.likedPosts = x;
      },
      (e) => {
        console.log(e);
      }
    );
  }
}
