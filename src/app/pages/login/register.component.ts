import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

    registerData: any = {}
    
    firstFormGroup = this._formBuilder.group({firstCtrl: ['', Validators.required],});
    secondFormGroup = this._formBuilder.group({secondCtrl: ['', Validators.required],});
    isLinear = false;

    constructor(public authService: AuthService, private _formBuilder: FormBuilder, private _snackBar: MatSnackBar) {}

    post() {
        console.log(this.registerData);
        this.authService.registerUser(this.registerData);
        let bienvenue: string = "Bienvenue sur MuscleMAX "+ this.registerData.name +" ! Nous vous souhaitons un agréable moment.";
        this._snackBar.open(bienvenue, "Merci");
    }
}
