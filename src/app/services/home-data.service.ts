import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../utils/globals';
import { map } from 'rxjs/operators';
import { PostModel } from '../models/post/post.model';

@Injectable({
  providedIn: 'root',
})
export class HomeDataService {
  posts = '/posts';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http
      .get(Globals.APIURL + this.posts)
      .pipe(
        map((posts: any) => posts.map((post: PostModel) => new PostModel(post)))
      );
  }
}
