import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, public provider: UserService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group(
      {
        username: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', [
          Validators.minLength(6),
          Validators.required,
        ]),
        password2: new FormControl('', [Validators.required]),
      },
      {
        validator: this.comparePasswords('password', 'password2'),
      }
    );
  }
  /* custom validator for comparing the values of password input field and confirm password input field */
  comparePasswords(password, password2) {
    return (formGroup: FormGroup) => {
      const pas = formGroup.controls[password];
      const pas2 = formGroup.controls[password2];

      if (pas.value !== pas2.value) {
        pas2.setErrors({ passwordMismatch: true });
      } else {
        pas2.setErrors(null);
      }
    };
  }
  /* register a new user */
  register() {
    let credentials = {
      name: this.form.get('username').value,
      email: this.form.get('email').value,
      password: this.form.get('password').value,
    };

    this.provider.register(credentials);
  }
}
