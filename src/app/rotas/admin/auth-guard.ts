import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(
    private router: Router,
    private cookieService: CookieService
  ) {}

  canActivate(): boolean {
    if (this.cookieService.check('AdminSession')) {
      return true;
    } else {
      this.router.navigate(['/admin/login']);
      return false;
    }
  }
}
