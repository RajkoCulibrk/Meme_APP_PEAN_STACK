import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SingleCommentPreviewComponent } from './single-comment-preview/single-comment-preview.component';
import { SinglePostPageComponent } from './single-post-page/single-post-page.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  {
    path: 'post/:id',
    component: SinglePostPageComponent,
    children: [
      { path: 'comment/:id', component: SingleCommentPreviewComponent },
    ],
  },
  { path: 'new', component: AddNewPostComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
