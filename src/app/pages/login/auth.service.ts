import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
  messages: any = [];
  path = environment.path + '/auth';

  TOKEN_KEY = 'token'

  constructor(public http: HttpClient) { }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY)
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY)
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY)
  }

  registerUser(registerData: any) {
    this.http.post<any>(this.path + '/register', registerData).subscribe((res: any) => {
      this.saveToken(res.token)
    });
  }

  loginUser(loginData: any) {
    this.http.post<any>(this.path + '/login', loginData).subscribe((res: any) => {
      this.saveToken(res.token)
    });
  }

  saveToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token)
  }
}