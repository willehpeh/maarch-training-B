import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  onModify() {
    console.log(`Modify post ${this.post.title} (ID ${this.post.id})`);
  }

  onDelete() {
    console.log(`Delete post ${this.post.title} (ID ${this.post.id})`);
  }

}
