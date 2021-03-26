export class Post {
  post_id: number;
  title: string;
  image_public_url: string;
  likes: number;
  dislikes: number;
  created_at: string;
  author: string;
  comments: string;
  user_id: number;

  constructor(obj?: any) {
    this.post_id = (obj && obj.post_id) || null;
    this.title = (obj && obj.title) || null;
    this.image_public_url = (obj && obj.image_public_url) || null;
    this.likes = (obj && obj.likes) || 0;
    this.dislikes = (obj && obj.dislikes) || 0;
    this.comments = (obj && obj.comments) || 0;
    this.user_id = (obj && obj.user_id) || null;
    this.author = (obj && obj.author) || null;
    this.created_at = (obj && obj.created_at) || null;
  }
}
