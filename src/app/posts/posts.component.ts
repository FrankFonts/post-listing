import { Component, OnInit } from '@angular/core';
import { PostsService } from '../shared/get-posts.service';
import { Post } from '../shared/interfaces';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: [],
})
export class PostsComponent implements OnInit {
  posts!: Array<Post>;

  deletePost(postId: number) {
    this.postsService.deletePost(postId).subscribe((res) => {
      this.posts = this.posts.filter((post) => post.id !== postId);
    });
  }

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((res) => (this.posts = res));
  }
}
