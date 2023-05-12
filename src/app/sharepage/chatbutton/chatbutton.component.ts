import { Component } from '@angular/core';

@Component({
  selector: 'chat-button',
  templateUrl: './chatbutton.component.html',
  styleUrls: ['./chatbutton.component.css']
})
export class ChatButtonComponent {

  open: boolean = false;

  constructor() {}
}
