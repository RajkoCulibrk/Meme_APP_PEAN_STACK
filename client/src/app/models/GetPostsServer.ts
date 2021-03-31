export class GetPostsServer {
  data: { posts };

  constructor(obj?: any) {
    this.data = (obj && obj.data) || null;
  }
}
