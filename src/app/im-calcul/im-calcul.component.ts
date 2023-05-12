import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/pages/login/auth.service';
import { ApiService } from '../pages/login/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-im-calcul',
  templateUrl: './im-calcul.component.html',
  styleUrls: ['./im-calcul.component.css']
})
export class ImcCalculatorComponent implements OnInit {

  weight: number = 81;
  height: number = 175;
  profile: any

  constructor(public apiService: ApiService, public route: ActivatedRoute, public authService: AuthService) {
    if(this.authService.isAuthenticated) {
      this.weight = 90;
      this.height = 180;
    }
  }

  ngOnInit(): void {
    const calculateBtn = document.getElementById('calculate') as HTMLButtonElement;
    const weightInput = document.getElementById('weight') as HTMLInputElement;
    const heightInput = document.getElementById('height') as HTMLInputElement;
    const resultDiv = document.getElementById('result') as HTMLDivElement;

    calculateBtn.addEventListener('click', () => {
      const weight = parseFloat(weightInput.value);
      const height = parseFloat(heightInput.value) / 100;
      const bmi = weight / (height * height);
      const bmiRounded = bmi.toFixed(1);

      let message = '';

      if (bmi < 18.5) {
        message = 'Sous-poids';
      } else if (bmi >= 18.5 && bmi < 25) {
        message = 'Poids normal';
      } else if (bmi >= 25 && bmi < 30) {
        message = 'Surpoids';
      } else {
        message = 'Obèse';
      }

      resultDiv.innerHTML = `Ton IMC est de ${bmiRounded}. Tu es considéré(e): ${message}.`;
    });
  }
}