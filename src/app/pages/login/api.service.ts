import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
  messages: any = [];
  comments: any = [];
  users: any = [];
  path = environment.path;
  uniqueEmail = true;

  constructor(public http: HttpClient) { }

  getMessages(userId: any) {
    this.http.get<any>(this.path + '/posts/' + userId).subscribe(res => {
        this.messages = res
    });
  }

  async uniqueMail(registerData: any) {

      this.http.get(this.path + '/email/' + registerData.email).subscribe((res: any) => {
        if(res[0].email = registerData.email) {
          this.uniqueEmail = false;
          console.log("Email déjà utilisé")
        } else {
          console.log("Email unique")
          this.uniqueEmail = true;
        }
      });
  }

  getComments(title: any) {
    this.http.get<any>(this.path + '/comments/' + title).subscribe(res => {
        for (let i = 0; i < res.length; i++) {
            this.getProfile(res[i].author).subscribe((data: any) => {
              res[i].name = data.name;
              res[i].prenom = data.prenom;
              if(data.note) {
                res[i].note = data.note;
              }
            });
        }
        this.comments = res
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

  getProfileByEmail(email: any) {
    return this.http.get(this.path + '/email/' + email)
  }

  getArticle(title: any) {
    return this.http.get(this.path + '/article/' + title)
  }
}