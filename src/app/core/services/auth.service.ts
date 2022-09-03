import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private cookies: CookieService, private http: HttpClient) {}

  login(): Observable<User> {
    return this.http.get<User>('http://localhost:3000/users');
  }

  setCookie(token: string) {
    this.cookies.set('token', token);
  }

  getCookie() {
    this.cookies.get('token');
  }
}
