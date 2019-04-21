import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { PostsService } from '../services/posts.service';
import { minLengthValidator } from './min-length.validator';
import { MyAsyncValidator } from './my-async.validator';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../models/Post';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;
  mode: string;
  post: Post;

  constructor(private formBuilder: FormBuilder,
              private auth: AuthService,
              private postsService: PostsService,
              private myAsync: MyAsyncValidator,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    if (!this.route.snapshot.params.id) {
      this.mode = 'new';
      this.postForm = this.formBuilder.group({
        title: ['', [Validators.required, minLengthValidator(5)]],
        content: ['', [Validators.required], [this.myAsync.validate]]
      });
    } else {
      this.mode = 'modify';
      this.post = this.postsService.getPostById(this.route.snapshot.params.id);
      this.postForm = this.formBuilder.group({
        title: [this.post.title, [Validators.required, minLengthValidator(5)]],
        content: [this.post.content, [Validators.required], [this.myAsync.validate]]
      });
    }

    this.postForm.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged((a, b) => a.title === b.title && a.content === b.content)
    ).subscribe(console.log);
  }

  onSubmit() {
    if (this.mode === 'new') {
      this.postsService.addPost(this.postForm.get('title').value, this.postForm.get('content').value);
    } else {
      this.post.title = this.postForm.get('title').value;
      this.post.content = this.postForm.get('content').value;
      this.postsService.modifyPost(this.post);
    }
    this.postForm.reset();
    this.router.navigate(['posts']);
  }

}
