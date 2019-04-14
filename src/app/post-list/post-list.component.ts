import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];

  constructor() { }

  ngOnInit() {
    this.posts.push({
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
    });
  }
}
