import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { ApiService } from './api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    
    registerData: any = {}
    
    firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['', Validators.required],});
    secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['', Validators.required],});
    isLinear = false;

    sexes: string[] = ['Homme', 'Femme'];

    validateEmail = true;
    validatePrenom = true;
    validateName = true;
    validatePwd = true;
    hide = true;

    constructor(public apiService: ApiService, public authService: AuthService, private _formBuilder: FormBuilder,
       private _snackBar: MatSnackBar, private _router: Router) {
      this.registerData.poids = 81;
      this.registerData.taille = 175;
    }

    post() {
        console.log(this.registerData);
        if(this.matchReg()) {
          this.authService.registerUser(this.registerData);
          let bienvenue: string = "Bienvenue sur MuscleMAX "+ this.registerData.prenom +" ! Nous vous souhaitons un agréable moment.";
          this._snackBar.open(bienvenue, "Merci");
          this._router.navigate(['']);
        }
    }

    formatTaille(value: number): string {
      return `${value}cm`;
    }

    formatPoids(value: number): string {
      return `${value}kg`;
    }

    matchReg() {
      let match = true;
      if(!this.matchRegEmail()) {
        match = false;
      }
      if(!this.matchRegName()) {
        match = false;
      }
      if(!this.matchRegPrenom()) {
        match = false;
      }
      if(!this.matchRegPwd()) {
        match = false;
      }
      // this.apiService.uniqueMail(this.registerData)
      // if(!this.apiService.uniqueEmail) {
      //   match = false;
      // }
      return match;
    }

    matchRegPwd() {
      if(this.registerData.pwd.match("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")) {
        this.validatePwd = true;
        return true;
      } else {
        this.validatePwd = false;
        return false;
      }
    }

    matchRegName() {
      if(this.registerData.name.match("^[A-Z][A-Za-z\é\è\ê\-]+$")) {
        this.validateName = true;
        return true;
      } else {
        this.validateName = false;
        return false;
      }
    }

    matchRegPrenom() {
      if(this.registerData.prenom.match("^[A-Z][A-Za-z\é\è\ê\-]+$")) {
        this.validatePrenom = true;
        return true;
      } else {
        this.validatePrenom = false;
        return false;
      }
    }

    matchRegEmail() {
      if(this.registerData.email.match("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")) {
        this.validateEmail = true;
        return true;
      } else {
        this.validateEmail = false;
        return false;
      }
    }

      // this.apiService.getProfileByEmail(this.registerData.email).subscribe((data: any) => {
      //   console.log(data[0].email)
      //   console.log(this.registerData.email)
      //   console.log(data[0].email == this.registerData.email)

      //   if(!!data) {
      //     this.uniqueEmail = false;
      //     console.log("Email déjà utilisé")
      //   } else {
      //     console.log("Email unique")
      //     this.uniqueEmail = true;
      //   }
      // });
}
