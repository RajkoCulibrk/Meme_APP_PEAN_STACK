export class Post {
  post_id: string;
  title: string;
  image_public_url: string;
  likes: string;
  dislikes: string;

  constructor(obj?: any) {
    this.post_id = (obj && obj.post_id) || null;
    this.title = (obj && obj.title) || null;
    this.image_public_url = (obj && obj.image_public_url) || null;
    this.likes = (obj && obj.likes) || 0;
    this.dislikes = (obj && obj.dislikes) || 0;
  }
}
