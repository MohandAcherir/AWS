import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'login',
  template: `
    <mat-card>
        <mat-card-header>
            <mat-card-title>
                <h1> </h1>
            </mat-card-title>
        </mat-card-header>
        <mat-card-header>
            <mat-card-title>
                <h1>Connexion</h1>
            </mat-card-title>
            </mat-card-header>


        <mat-accordion>
            <mat-expansion-panel (opened)="panelOpenState = true" (closed)="panelOpenState = false">
                <mat-expansion-panel-header>
                    <mat-panel-title>
                    Vous avez un compte ?
                    </mat-panel-title>
                    <mat-panel-description>
                    Se connecter
                    </mat-panel-description>
                </mat-expansion-panel-header>
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
            </mat-expansion-panel>
      </mat-accordion>



        <mat-accordion>
        <mat-expansion-panel (opened)="panelOpenState = true" (closed)="panelOpenState = false">
          <mat-expansion-panel-header>
            <mat-panel-title>
              Vous n'avez pas de compte ?
            </mat-panel-title>
            <mat-panel-description>
              Créer vous un compte
            </mat-panel-description>
          </mat-expansion-panel-header>
          <register></register>
        </mat-expansion-panel>
      </mat-accordion>
    </mat-card>
`,
styleUrls: ['./login.component.css']
})
export class LoginComponent {

    loginData: any = {}
    panelOpenState = false;
    
    constructor(public authService: AuthService, private _snackBar: MatSnackBar) {}

    post() {
        this.authService.loginUser(this.loginData);
        this._snackBar.open("Bonjour "+ this.loginData.email +", ravi de vous revoir.", "Fermer");
    }
}