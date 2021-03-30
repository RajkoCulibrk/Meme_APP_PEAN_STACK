import { Comment } from './Comment';

export class GetCommentsServer {
  data: {
    comments: Comment[];
  };
  /**
   *
   */
  constructor(obj?: any) {
    this.data = (obj && obj.data) || null;
  }
}
