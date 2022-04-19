import {AuthService} from "../interfaces";

export class AuthImplService implements AuthService{

  authenticated: boolean = false;

  constructor() { }

  isLoggedIn(): boolean {
    return this.authenticated;
  }

  login(): void {
    this.authenticated = true;
  }

  logout(): void {
    this.authenticated = false;
  }
}
