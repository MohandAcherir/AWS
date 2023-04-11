import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'messages',
  template: `
            <div *ngFor="let message of apiService.messages">
                <mat-card>
                    <mat-card-content>{{message.msg}}</mat-card-content>
                </mat-card>
            </div>
            `
})
export class MessagesComponent implements OnInit {
  constructor(public apiService: ApiService, public route: ActivatedRoute) { }

  ngOnInit() {
    var userId = this.route.snapshot.params['id']

    this.apiService.getMessages(userId);
  }
}
