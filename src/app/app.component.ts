import { Component, OnInit } from '@angular/core';
import { AuthService } from './pages/login/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(public authService: AuthService, private _snackBar: MatSnackBar) { }

  deconnexion() {
    this._snackBar.open("Vous êtes déconnecté(e).", "Fermer");
    this.authService.logout()
  }

  ngOnInit(): void {
  }

}
