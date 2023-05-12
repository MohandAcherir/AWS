import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  template: `
    <mat-card style="z-index:1;">
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
              Créez-vous un compte
            </mat-panel-description>
          </mat-expansion-panel-header>
          <register></register>
        </mat-expansion-panel>
      </mat-accordion>
    </mat-card>
    
    <video onloadedmetadata="this.muted = true" autoplay muted loop id="videoFond">
        <source src="../../../assets/images/FondCommentairesCrossfit.mp4" type="video/mp4" />
    </video>
`,
styleUrls: ['./login.component.css']
})
export class LoginComponent {

    loginData: any = {}
    panelOpenState = false;
    
    constructor(public apiService: ApiService, public authService: AuthService, private _snackBar: MatSnackBar,
        private _router: Router) {}

    post() {
        this.authService.loginUser(this.loginData);
        this.apiService.getProfileByEmail(this.loginData.email).subscribe((data: any) => {
            console.log(data[0])
            this._snackBar.open("Bonjour "+ data[0].prenom +", ravi de vous revoir.", "Fermer");
            this._router.navigate(['']);
        });
    }
}