import { Injectable } from '@angular/core';
import { Post } from './post';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
posts: Post[] = [];
posstSub = new Subject<Post[]>();

  getPosts() {
    return this.posstSub.asObservable();
  }

  addPost(post: Post) {
      this.posts.push(post);
      this.posstSub.next([...this.posts]);
  }
}
