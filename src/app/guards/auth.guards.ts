import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../core/services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  /**
   * Determines whether activate can
   * @param route activated route
   * @param state route state
   * @returns true if activate
   */
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      if (window.location.href.indexOf('code') >= 0 &&
        window.location.href.indexOf('session_state') >= 0) {
        this.authService.completeAuthentication();
        return true;

      } else {
        this.authService.login();
      }
    }
    return false;
  }
}
