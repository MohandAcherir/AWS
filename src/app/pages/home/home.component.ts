
import { Component, OnInit } from '@angular/core';
import { Carousel01Component } from 'src/app/services/carousel06.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private pictures:Carousel01Component){}
  slides:any;
  ngOnInit(): void {
    this.slides=this.pictures.slides;
  }
}
