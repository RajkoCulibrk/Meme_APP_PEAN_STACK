export class Token {
  data: { token: string };

  constructor(obj?: any) {
    this.data = (obj && obj.data) || null;
  }
}
