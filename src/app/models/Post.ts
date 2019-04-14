import { User } from './User';

export class Post {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  user: User;
}
