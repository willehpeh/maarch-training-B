import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import { PostsService } from '../services/posts.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.posts$ = this.postsService.getPosts();
  }
}
