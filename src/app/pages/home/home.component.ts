
import { Component, OnInit } from '@angular/core';
import { ExerciceDetailsService } from 'src/app/services/exercice-details.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service:ExerciceDetailsService){}
  exerciceData:any;
  ngOnInit(): void {
    this.exerciceData=this.service.exerciceDetails;
  }
}
