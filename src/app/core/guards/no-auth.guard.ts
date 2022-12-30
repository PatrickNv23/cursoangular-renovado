import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { INTERNAL_PATHS } from '@data/constants/routes';
import { AuthService } from '@data/services/api/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.authService.getUser;
    if (currentUser) {
      this.router.navigateByUrl(INTERNAL_PATHS.PANEL_USER_LIST);
      return false;
    }
    return true;
  }
}
