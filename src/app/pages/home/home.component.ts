
import { Component, OnInit } from '@angular/core';
import { ExerciceDetailsService } from 'src/app/services/exercice-details.service';
import { CalorieCalculComponent } from 'src/app/services/calorie-calcul.component';
import { AuthService } from 'src/app/pages/login/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  weight: number  = 0;
  height: number = 0;
  age: number = 0;
  gender: string = "";
  activity: string = "";
  bmr: number = 0;
  tdee: number = 0;
  protein: number = 0;
  fat: number= 0;
  carbs: number = 0;
  showResults: boolean = true; // Define the showResults property
 
  constructor(public authService: AuthService, private service:CalorieCalculComponent){
      this.weight = this.service.weight;
    this.height = this.service.height;
    this.age = this.service.age;
    this.gender = this.service.gender;
    this.activity = this.service.activity;
    this.bmr = this.service.bmr;
    this.tdee = this.service.tdee;
    this.protein = this.service.protein;
    this.fat= this.service.fat;
    this.carbs = this.service.carbs;
    this.showResults = true;
  }  
  ngOnInit(): void {
    this.weight = 0;
    this.height = 0;
    this.age = 0;
    this.gender = "";
    this.activity = "";
    this.bmr = 0;
    this.tdee = 0;
    this.protein = 0;
    this.fat=0;
    this.carbs = 0;
    this.showResults = true; // Define the showResults property
  }
  
  calculate():number {
  	return 2;
  }
}
