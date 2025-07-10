import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Post } from '../models/post.type';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor() { }

  http = inject(HttpClient) // http will be now used to make api calls in this file
  private url = environment.apiUrl

  // Observable is a type that represents a stream of values
  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.url)
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.url, post)
  }
}
