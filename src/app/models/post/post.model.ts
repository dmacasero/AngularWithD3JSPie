export class PostModel {
  userId: number;
  id: number;
  title: string;
  body: string;

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}
