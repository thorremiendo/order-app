import { Router } from '@angular/router';
import { AuthData } from './../models/auth-data.model';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: User;
  authChange = new Subject<string>();
  constructor(private router: Router) {}

  login(authData: AuthData) {
    this.user = {
      name: authData.username,
      role: authData.password,
    };
    this.authChange.next(this.user.role);
    if (this.user) {
      if (this.user.role == 'user') {
        this.router.navigateByUrl('/');
      } else if (this.user.role == 'admin') {
        this.router.navigateByUrl('/admin');
      }
    }
  }

  logout() {
    this.user = null;
    this.authChange.next(null);
    this.router.navigate(['/login']);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user;
  }

  isUser() {
    return this.user?.role == 'user';
  }
  isAdmin() {
    return this.user?.role == 'admin';
  }
}
