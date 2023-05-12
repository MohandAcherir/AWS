import { Component } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
     public slides = [
  { src: "../../assets/Salles-de-sport.png" },
  { src: "../../assets/im3.jpg" },
  { src: "../../assets/im4.jpg" },
  { src: "../../assets/im5.jpg" },
  { src: "../../assets/im6.jpg" },
  { src: "../../assets/im7.jpg" },
];

currentSlide = 0;

constructor() {}

onPreviousClick() {
  const previous = this.currentSlide - 1;
  this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  console.log("previous clicked, new current slide is: ", this.currentSlide);
}

onNextClick() {
  const next = this.currentSlide + 1;
  this.currentSlide = next === this.slides.length ? 0 : next;
  console.log("next clicked, new current slide is: ", this.currentSlide);
}
}
