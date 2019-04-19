import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Post } from '../models/Post';
import { PostsService } from '../services/posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<Post> {
  constructor(private posts: PostsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Post {
    const id = route.params['id'];
    return this.posts.getPostById(id);
  }
}
