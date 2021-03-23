import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { Post } from '../models/Post';
import { PostsService } from '../posts-service.service';
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
  constructor(private fb: FormBuilder, private postsService: PostsService) {}

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm() {
    this.form = this.fb.group({
      title: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
    });
  }

  markAsTouched() {
    console.log('kurcina');
    this.form.get('image').markAsTouched();
  }

  onFileChange(e) {
    let reader = new FileReader();
    const file = e.target.files[0];
    reader.readAsDataURL(file);
    this.form.patchValue({
      image: file,
    });

    reader.onload = () => {
      this.src = reader.result;
    };
  }

  submitForm(event) {
    event.preventDefault();
    let formData = new FormData();
    formData.append('title', this.form.get('title').value);
    formData.append('image', this.form.get('image').value);
    this.postsService.addNewPost(formData).subscribe(
      (x) => {
        console.log(x);
      },
      (e) => {
        console.log(e);
      }
    );
  }
}
