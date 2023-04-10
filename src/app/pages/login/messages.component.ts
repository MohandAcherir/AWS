import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'messages',
  template: `
            <div *ngFor="let message of apiService.messages">
                <mat-card>
                    <mat-card-content>{{message.message}}</mat-card-content>
                </mat-card>
            </div>
            `
})
export class MessagesComponent implements OnInit {
  title = 'MuscleMAX';

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getMessages();
  }
}
