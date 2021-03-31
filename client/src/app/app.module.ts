import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { TokenItnerceptorService } from './token-itnerceptor.service';
import { SinglePostPageComponent } from './single-post-page/single-post-page.component';
import { SideNavComponent } from './core/side-nav/side-nav.component';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';
import { CommentsComponent } from './comments/comments.component';
import { SingleCommentComponent } from './single-comment/single-comment.component';
import { PostCommentComponent } from './post-comment/post-comment.component';

import { SingleCommentPreviewComponent } from './single-comment-preview/single-comment-preview.component';
import { SideNavContentComponent } from './core/side-nav-content/side-nav-content.component';
import { PostsILikeComponent } from './posts-ilike/posts-ilike.component';
import { MyMemesComponent } from './my-memes/my-memes.component';
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { ScrollToTopComponent } from './core/scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    SinglePostComponent,
    SinglePostPageComponent,
    SideNavComponent,
    AddNewPostComponent,
    CommentsComponent,
    SingleCommentComponent,
    PostCommentComponent,

    SingleCommentPreviewComponent,

    SideNavContentComponent,

    PostsILikeComponent,

    MyMemesComponent,

    NotFoundComponent,

    ScrollToTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenItnerceptorService,
      multi: true,
    },
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
