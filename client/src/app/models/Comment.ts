export class Comment {
  comment_id: number;
  user_id: number;
  post_id: number;
  body: string;
  reply_to: number;
  created_at: string;
  likes: number;
  dislikes: number;
  subcomments: number;
  parrent_comment_author: string;
  user_name: string;

  constructor(obj?: any) {
    (this.comment_id = (obj && obj.comment_id) || null),
      (this.user_id = (obj && obj.user_id) || null),
      (this.post_id = (obj && obj.post_id) || null),
      (this.body = (obj && obj.body) || null),
      (this.reply_to = (obj && obj.reply_to) || null),
      (this.created_at = (obj && obj.created_at) || null),
      (this.likes = (obj && obj.likes) || null),
      (this.dislikes = (obj && obj.dislikes) || null),
      (this.subcomments = (obj && obj.subcomments) || null),
      (this.user_name = (obj && obj.user_name) || null),
      (this.parrent_comment_author =
        (obj && obj.parrent_comment_author) || null);
  }
}
