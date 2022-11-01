import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<Array<Post>> {
    return this.httpClient
      .get<Array<Post>>('https://jsonplaceholder.typicode.com/posts')
      .pipe(map((posts) => (posts.length >= 10 ? posts.slice(0, 10) : posts)));
  }

  deletePost(postId: number) {
    return this.httpClient.delete<Post>(
      'https://jsonplaceholder.typicode.com/posts/' + postId
    );
  }
}
