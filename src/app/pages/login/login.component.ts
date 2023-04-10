import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'login',
  template: `
    <mat-card>
        <mat-card-header>
            <mat-card-title>
                <h4>Se connecter</h4>
            </mat-card-title>
        </mat-card-header>
        <mat-card-content>
            <form>
                <mat-form-field>
                    <mat-label>Votre adresse courriel</mat-label>
                    <input [(ngModel)]="loginData.email" name="email" matInput placeholder="Adresse courriel" type="email">
                </mat-form-field>
                <mat-form-field>
                    <mat-label>Votre mot de passe</mat-label>
                    <input [(ngModel)]="loginData.pwd" name="password" matInput placeholder="Mot de passe" type="password">
                </mat-form-field>
                <br>
                <button (click)="post()" mat-raised-button color="primary">Valider</button>
            </form>
        </mat-card-content>
    </mat-card>
`
})
export class LoginComponent {

    loginData: any = {}

    constructor(public authService: AuthService) { }

    post() {
        this.authService.loginUser(this.loginData);
    }
}