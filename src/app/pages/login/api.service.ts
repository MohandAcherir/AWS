import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
  messages: any = [];
  users: any = [];
  path = environment.path;

  constructor(public http: HttpClient) { }

  getMessages(userId: any) {
    this.http.get<any>(this.path + '/posts/' + userId).subscribe(res => {
        this.messages = res
    });
  }

  postMessage(message: any) {
    this.http.post(this.path + '/post', message).subscribe(res => {
    });
  }

  getUsers() {
    this.http.get<any>(this.path + '/users').subscribe(res => {
        this.users = res
    });
  }

  getProfile(id: any) {
    return this.http.get(this.path + '/profile/' + id)
  }
}