import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public userCreds = {
    username: 'user',
    password: 'user',
  };
  public adminCreds = {
    username: 'admin',
    password: 'admin',
  };
  public loginForm: FormGroup;
  get loginFormControls() {
    return this.loginForm.controls;
  }
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (
      JSON.stringify(this.loginForm.value) == JSON.stringify(this.userCreds) ||
      JSON.stringify(this.loginForm.value) == JSON.stringify(this.adminCreds)
    ) {
      this.authService.login({
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
      });
    }
  }
}
