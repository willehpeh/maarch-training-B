import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { PostsService } from '../services/posts.service';
import { minLengthValidator } from './min-length.validator';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private auth: AuthService,
              private postsService: PostsService) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title: ['', [Validators.required, minLengthValidator(5)]],
      content: ['', Validators.required]
    });
  }

  onSubmit() {
    this.postsService.addPost(this.postForm.get('title').value, this.postForm.get('content').value);
    this.postForm.reset();
  }

}
