import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { AuthService } from './auth.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private auth: AuthService) {}

  posts: Post[] = [{
    id: 'omeirhgsdmoih',
    title: 'First post',
    content: 'Eat an easter feather as if it were a bird then burp victoriously, but tender. Experiences short bursts of poo-phoria after going to the loo take a big fluffing crap for jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed for chase laser paw at beetle and eat it before it gets away.',
    createdAt: new Date(),
    user: {
      id: 'moih',
      name: 'Will',
      email: 'will@will.com'
    }
  }, {
    id: 'eziofhezishq',
    title: 'Second post',
    content: 'I\'m bored inside, let me out i\'m lonely outside, let me in i can\'t make up my mind whether to go in or out, guess i\'ll just stand partway in and partway out, contemplating the universe for half an hour how dare you nudge me with your foot?!?! leap into the air in greatest offense!',
    createdAt: new Date(),
    user: {
      id: 'moih',
      name: 'Jim',
      email: 'jim@jim.com'
    }
  }, {
    id: 'zqosierhdiob',
    title: 'Third post',
    content: 'lick the other cats yet throwup on your pillow, yet soft kitty warm kitty little ball of furr chew iPad power cord. Play riveting piece on synthesizer keyboard bring your owner a dead bird or sit and stare yet brown cats with pink ears so sleep everywhere, but not in my bed. Attack the child paw your face to wake you up in the morning, rub against owner because nose is wet or if it fits, i sits.',
    createdAt: new Date(),
    user: {
      id: 'moih',
      name: 'Will',
      email: 'will@will.com'
    }
  }];

  posts$ = new BehaviorSubject<Post[]>(this.posts);

  getPosts() {
    return this.posts$.asObservable();
  }

  emitPosts() {
    this.posts$.next(this.posts);
  }

  modifyPost(post: Post) {
    this.posts[this.posts.findIndex(element => element.id === post.id)] = post;
    this.emitPosts();
  }

  deletePost(post: Post) {
    if (this.auth.currentUser && post.user.name === this.auth.currentUser.name) {
      console.log(`Delete post ${post.title} (ID ${post.id})`);
    } else {
      console.log('Access denied!');
    }
    this.emitPosts();
  }

  addPost(title: string, content: string) {
    this.posts.unshift({
      id: 'somzemfoih' + Date.now().toString(),
      title,
      content,
      createdAt: new Date(),
      user: this.auth.currentUser ? this.auth.currentUser : null
    });
    console.log('Post added successfully!');
    this.emitPosts();
  }

  getPostById(id: string) {
    return this.posts.find(post => post.id === id);
  }
}
