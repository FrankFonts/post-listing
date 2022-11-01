import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/interfaces';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: [],
})
export class PostsComponent implements OnInit {
  posts!: Array<Post>;

  constructor() {}

  ngOnInit(): void {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
}
