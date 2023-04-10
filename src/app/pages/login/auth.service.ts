import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
  messages: any = [];
  path = 'http://localhost:3000/auth'

  constructor(public http: HttpClient) { }

  registerUser(registerData: any) {
    this.http.post(this.path + '/register', registerData).subscribe((res: any) => {
    });
  }

  loginUser(loginData: any) {
    this.http.post(this.path + '/login', loginData).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('token', res.token)
    });
  }
}