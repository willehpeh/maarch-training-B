import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import { PostsService } from '../services/posts.service';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];
  interval$: Observable<number>;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.posts = this.postsService.posts.slice();
    this.interval$ = interval(1000);
    this.interval$.pipe(
      map(value => value * 2)
    );
  }
}
