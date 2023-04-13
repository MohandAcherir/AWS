import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'users',
  template: `
            <div *ngFor="let user of apiService.users">
                <mat-card>
                    <mat-card-content [routerLink]="['/profile', user._id]" style="cursor: pointer">{{user.name}} {{user.prenom}}</mat-card-content>
                </mat-card>
            </div>
            `
})
export class UsersComponent implements OnInit {
  title = 'MuscleMAX';

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUsers();
  }
}
