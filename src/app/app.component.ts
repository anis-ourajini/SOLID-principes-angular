import {Component, Inject, OnInit} from '@angular/core';
import {AUTH_SERVICE, AuthService} from "./core/interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my practice for dependency inversion DI ';
  loggedIn : boolean = false;

  constructor(@Inject(AUTH_SERVICE) private authService: AuthService) {}

  ngOnInit() {
    this.loggedIn = this.authService.isLoggedIn();
  }

  login() {
    this.authService.login();
    this.loggedIn = this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.loggedIn = this.authService.isLoggedIn();
  }

}
