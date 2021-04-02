import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetPostsServer } from './models/GetPostsServer';
import { Post } from './models/Post';
import { PostsList } from './models/PostsList';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  url: string = 'https://rajko-meme-app.herokuapp.com/api/posts/';
  page = 1;
  order_by = 'created_at';
  order = 2;
  like = '';
  posts: Post[] = [];
  loadingPosts: boolean = false;
  noContent = false;
  showToTheTop: boolean = false;
  myPosts: Post[];
  constructor(private http: HttpClient) {}
  /* get all posts for the homepage */
  getPosts() {
    /* setting loading to true so we can show the spinner */
    this.loadingPosts = true;
    let params = new HttpParams()
      .set('page', this.page.toString())
      .set('order_by', this.order_by)
      .set('order', this.order.toString())
      .set('like', this.like);

    this.http
      .get<{ data: { posts: Post } }>(this.url, { params: params })
      .pipe(
        map((x) => {
          return new PostsList(x.data);
        })
      )
      .subscribe(
        (x) => {
          /*if we recieve an empty array from the server that means we have no conten se we want to show no more content warning */
          if (!x.posts.length) {
            this.noContent = true;
          } else {
            this.noContent = false;
          }
          x.posts.forEach((p) => {
            this.posts.push(p);
          });
          this.loadingPosts = false;
          /* the following lines ensure that if there is no scroller on the screen we load more content se the scroller appears because the loading of more posts happens only on scroll */
          let height = document.documentElement.scrollHeight;
          if (height == window.innerHeight) {
            this.getPosts();
          }
        },
        (e) => {
          this.loadingPosts = false;
          console.log(e);
        }
      );
    /* incrementing the page value se in the next run we actually fetch next page data not the same */
    this.page++;
  }
  /* get single post data based on post id */
  getSinglePost(id): Observable<Post> {
    return this.http.get<{ data: { post: Post } }>(this.url + id).pipe(
      map((x) => {
        return new Post(x.data.post);
      })
    );
  }

  /* get liked posts of a single user */
  getLikedPosts(): Observable<Post[]> {
    return this.http.get<GetPostsServer>(this.url + 'liked').pipe(
      map((x) => {
        let serverResponse = new GetPostsServer(x);

        return serverResponse.data.posts;
      })
    );
  }

  /* get posts of logged in user */
  getMyPosts() {
    return this.http
      .get<GetPostsServer>(this.url + 'my')
      .pipe(
        map((x) => {
          let serverResponse = new GetPostsServer(x);
          return serverResponse.data.posts;
        })
      )
      .subscribe(
        (x) => {
          this.myPosts = x;
        },
        (e) => {
          console.log(e);
        }
      );
  }

  /* check if logged in user has liked or disliked the post */
  checkLikeDislike(id) {
    return this.http
      .get(this.url + 'likedislike/' + id /* , { headers } */)
      .pipe(
        map((x: { data: { status: number } }) => {
          return x.data.status;
        })
      );
  }

  /* like or dislke post based on the value of action parameter that can be true or false */
  likeDislikePost(id, action) {
    return this.http.post(this.url + 'likedislike/' + id, { action }).pipe(
      map((x: { data: { status: number } }) => {
        return x.data.status;
      })
    );
  }

  /* add new post */
  addNewPost(formData: FormData): Observable<Post> {
    return this.http.post(this.url, formData).pipe(
      map((x: { data: { post: Post } }) => {
        return new Post(x.data.post);
      })
    );
  }
  /* delete a post based on its id */
  deletePost(id) {
    return this.http.delete(this.url + id);
  }
}
