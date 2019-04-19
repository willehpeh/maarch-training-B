import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostResolver } from './new-post/post.resolver';

const routes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'new-post', component: NewPostComponent },
  { path: 'modify/:id', component: NewPostComponent, resolve: { post: PostResolver } },
  { path: '', pathMatch: 'full', redirectTo: 'posts' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
