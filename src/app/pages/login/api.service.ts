import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
  messages: any = [];
  users: any = [];

  constructor(public http: HttpClient) { }

  getMessages() {
    this.http.get('http://localhost:3000/posts').subscribe(res => {
        this.messages = res
    });
  }

  getUsers() {
    this.http.get('http://localhost:3000/users').subscribe(res => {
        this.users = res
    });
  }

  getProfile(id: any) {
    return this.http.get('http://localhost:3000/profile/' + id)
  }
}