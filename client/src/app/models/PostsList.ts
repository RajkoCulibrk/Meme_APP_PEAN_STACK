import { Post } from './Post';
export class PostsList {
  posts: Post[];
  /**
   *
   */
  constructor(obj?: any) {
    this.posts = (obj && obj.posts) || null;
  }
}
