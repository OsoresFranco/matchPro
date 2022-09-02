import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private cookies: CookieService) {}

  setCookie(token: string) {
    this.cookies.set('token', token);
  }

  getCookie() {
    this.cookies.get('token');
  }
}
