import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.type';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',  // element name with which we can use this component in html i.e <app-posts />
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html'
})
export class PostsComponent {
  http = inject(HttpClient)

  // posts = signal<Array<Post>>([]) // here type is array of Post which we already defined in post.type.ts
  posts = signal<Post[]>([])  // this is same as above
  postsService = inject(PostsService)

  // ngOnInit is called when component is initialized
  ngOnInit() {
    // with type any (not recommended)
    // this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe((res: any) => {
    //   // console.log(res)
    // })

    // with type Array<Post>
    // this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts').subscribe((res) => {
    //   this.posts.set(res)
    // })

    // with service
    this.postsService.getPosts().subscribe((res) => {
      this.posts.set(res)
    })
  }
}
