export class User {
  user_name: string;
  user_email: string;
  user_id: number;
  constructor(obj?: any) {
    this.user_email = (obj && obj.user_email) || null;
    this.user_name = (obj && obj.user_name) || null;
    this.user_id = (obj && obj.user_id) || null;
  }
}
