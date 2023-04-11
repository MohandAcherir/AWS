import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'post',
  template: `
<mat-card style="background-color: gainsboro;">
    <mat-card-header>
        <mat-card-title>
            <h4>Publier un message</h4>
        </mat-card-title>
    </mat-card-header>
    <mat-card-content>
        <form>
            <mat-form-field style="width: 100%">
                <mat-label>Exprimez-vous</mat-label>
                <textarea  [(ngModel)]="postMsg" name="description" matInput placeholder="Il n'y a pas de victoires sans échecs..."></textarea>
            </mat-form-field>
            <br>
            <button (click)="post()" mat-raised-button color="primary">Publier</button>
        </form>
    </mat-card-content>
</mat-card>
            `
})
export class PostComponent {
    constructor(public apiService: ApiService) { }
    postMsg = ''
    
    post() {
        this.apiService.postMessage({msg: this.postMsg})
    }
}
