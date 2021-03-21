export class User {
  user_name: string;
  user_email: string;
  constructor(obj?: any) {
    this.user_email = (obj && obj.user_email) || null;
    this.user_name = (obj && obj.user_name) || null;
  }
}
