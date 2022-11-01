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

  ngOnInit(): void {}
}
