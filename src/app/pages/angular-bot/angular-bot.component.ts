import { Component, OnInit } from '@angular/core';
import {Message,ChatService} from '../../services/chat.service';


@Component({
  selector: 'app-angular-bot',
  templateUrl: './angular-bot.component.html',
  styleUrls: ['./angular-bot.component.css']
})
export class AngularBotComponent implements OnInit {
  
  messages: Message[] = [];
  propositions: string[] = [];
  value: string="";
  
  constructor(public chatService: ChatService) { 
    const bonjour = new Message('bot', "Bonjour!");
    const comment = new Message('bot', "Comment puis-je vous aider aujoud'hui ?");
    this.messages = this.messages.concat(bonjour);
    this.messages = this.messages.concat(comment);
  }
  
  ngOnInit() {
      this.chatService.conversation.subscribe((val) => {
        this.messages = this.messages.concat(val);
      });
      this.propositions = this.chatService.getPropositions(4);
  }
  
  sendMessage() {
    this.chatService.getBotAnswer(this.value);
    this.value = '';
  }

  sendProposition(proposition: string) {
    this.chatService.getBotAnswer(proposition);
    this.propositions = this.chatService.getPropositions(4);
    this.value = '';
  }
}