import { Component } from '@angular/core';

@Component({
  selector: 'app-calorie-calcul',
  templateUrl: './calorie-calcul.component.html',
  styleUrls: ['./calorie-calcul.component.css']
})
export class CalorieCalculComponent {
  weight: number = 0;
  height: number = 0;
  age: number = 0;
  gender: string = "";
  activity: string = "";
  bmr: number = 0;
  tdee: number = 0;
  protein: number = 0;
  fat: number=0;
  carbs: number = 0;
  showResults: boolean = false; // Define the showResults property

  constructor() {}

  
    calculate() {
      if (this.gender === "male") {
        this.bmr = Math.round(88.362 + (13.397 * this.weight) + (4.799 * this.height) - (5.677 * this.age));
      } else {
        this.bmr = Math.round(447.593 + (9.247 * this.weight) + (3.098 * this.height) - (4.330 * this.age));
      }
  
      switch (this.activity) {
        case "sedentary":
          this.tdee = Math.round(this.bmr * 1.2);
          break;
        case "lightly-active":
          this.tdee = Math.round(this.bmr * 1.375);
          break;
        case "moderately-active":
          this.tdee = Math.round(this.bmr * 1.55);
          break;
        case "very-active":
          this.tdee = Math.round(this.bmr * 1.725);
          break;
        case "extremely-active":
          this.tdee = Math.round(this.bmr * 1.9);
          break;
      }
  
      this.protein = Math.round(this.weight * 2.2);
      this.fat = Math.round(this.tdee * 0.25 / 9);
      this.carbs = Math.round((this.tdee - (this.protein * 4) - (this.fat * 9)) / 4);
      this.showResults = true;

    }
  }
