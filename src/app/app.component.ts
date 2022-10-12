import { AuthService } from './core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isAuth = null;
  constructor(private authService: AuthService, private router: Router) {}
  title = 'ordering-app';

  ngOnInit() {
    this.authService.authChange.subscribe((authStatus) => {
      this.isAuth = authStatus;
    });
  }

  handleLogout() {
    this.authService.logout();
  }
}
