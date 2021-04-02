import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { Post } from '../models/Post';
import { PostsService } from '../posts-service.service';
import { UserService } from '../user-service.service';
@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.css'],
})
export class AddNewPostComponent implements OnInit {
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  src: any = '../../assets/placeholder.jpg';
  form: FormGroup;
  submitting: boolean = false;
  constructor(
    private fb: FormBuilder,
    private postsService: PostsService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm() {
    this.form = this.fb.group({
      title: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
    });
  }
  /* mark image input field as touched */
  markAsTouched() {
    this.form.get('image').markAsTouched();
  }
  /* when file is selected set src to the url of the selected file so we can preview it and send it to server for uploading */
  onFileChange(e) {
    let reader = new FileReader();
    const file = e.target.files[0];
    reader.readAsDataURL(file);
    /* set the value of form field to file value */
    this.form.patchValue({
      image: file,
    });

    reader.onload = () => {
      this.src = reader.result;
    };
  }
  /* submit dta for adding new post to submit value */
  submitForm(event) {
    /* if user is not logged in send him to loggin page and display an error */
    if (!this.userService.user) {
      this.userService.setError('Please sign in first!');
      this.router.navigateByUrl('/signin');
      return;
    }
    event.preventDefault();
    /* set submitting to true se we can display a spinner */
    this.submitting = true;
    /* create form data to be send to server */
    let formData = new FormData();
    formData.append('title', this.form.get('title').value);
    formData.append('image', this.form.get('image').value);
    this.postsService.addNewPost(formData).subscribe(
      (x) => {
        /* set submitting to false so we hide the spinner */
        this.submitting = false;
        this.postsService.posts.unshift(x);
        this.router.navigateByUrl('/');
      },
      (e) => {
        this.submitting = false;
        console.log(e);
      }
    );
  }
}
