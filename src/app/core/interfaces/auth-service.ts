export interface AuthService {
  isLoggedIn(): boolean;

  login(): void;

  logout(): void;

}
