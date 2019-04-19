import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postsService: PostsService,
              private router: Router) { }

  ngOnInit() {
  }

  onModify() {
    this.router.navigate(['modify', this.post.id]);
  }

  onDelete() {
    this.postsService.deletePost(this.post);
  }

}
