import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from 'src/app/post';
import { PostService } from 'src/app/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];

  constructor(private service: PostService) { }
  postsSub: Subscription;

  ngOnInit() {
    this.postsSub = this.service.getPosts().subscribe((posts) => this.posts = posts);
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
