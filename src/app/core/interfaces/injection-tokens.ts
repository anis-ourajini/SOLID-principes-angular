import {InjectionToken} from "@angular/core";
import {UsersService} from "./users-service";
import {AuthService} from "./auth-service";

export  const USERS_SERVICE = new InjectionToken<UsersService>('UsersService');
export const AUTH_SERVICE = new InjectionToken<AuthService>('AuthService');
