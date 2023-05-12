import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
export class Message {
  constructor(public author: string, public content: string) { }
}
@Injectable()
export class ChatService {
  constructor() { }
  conversation = new Subject<Message[]>();
  messageMap = {
    "Bonsoir": "Bonsoir, comment puis-je vous aider aujourd'hui?",
    "Bonjour": "Bonjour, comment puis-je vous aider aujourd'hui?",
    "Salut": "Salut !",
    "Comment allez-vous ?": "Je vais bien, merci !",
    "Quels sont les meilleurs exercices pour gagner du muscle":"Les meilleurs exercices pour gagner du muscle sont les exercices d'haltérophilie comme le squat, le soulevé de terre et le développé couché car ils augmentent le taux de testostérone.",
    "Combien de temps faut-il pour voir des résultats en musculation ?": "Cela dépend de nombreux facteurs tels que votre régime alimentaire, votre programme d'entraînement et votre génétique, mais vous pouvez généralement voir des résultats en quelques semaines à quelques mois.",
    "Quelle est la meilleure façon de perdre de la graisse?": "La meilleure façon de perdre de la graisse est de combiner une alimentation saine et équilibrée avec un programme d'exercices cardiovasculaires et de musculation.",
    "Je peux vous posez des question?": "Oui Bien sur !",
    "Quels sont les meilleurs exercices pour les biceps?": "Les meilleurs exercices pour les biceps sont les curls avec des haltères ou des barres, ainsi que les tractions supinations.",
    "Comment je peux augmenter ma force?": "Pour augmenter votre force, vous devriez vous concentrer sur les exercices composés tels que les squats, les développés couchés et les soulevés de terre.",
    "Quel est le temps de récupération idéal après une séance d'entraînement ?": "Le temps de récupération idéal après une séance d'entraînement dépend de l'intensité de votre entraînement et de vos objectifs personnels, mais généralement, vous devriez laisser vos muscles récupérer pendant 24 à 48 heures.",
    "Quelle est la meilleure façon de perdre du poids ?": "La meilleure façon de perdre du poids est de combiner une alimentation saine avec de l'exercice régulier.",
    "Comment je peux me débarrasser de la graisse du ventre ?": "Pour perdre de la graisse du ventre, vous devriez vous concentrer sur les exercices cardiovasculaires tels que la course à pied et le vélo, ainsi que sur les exercices d'abdominaux.",
    "Tu t'appelles comment?":"Muscle Max Rotella",
    "Où habites-tu ?":"Au corps des manifestations de Paris",
    "qui est tom abbouz?":"Bah! C'est simple ! C'est tom abbouz!",
    "donner moi d'autres détails sur tom abbouz":"Tom abbouz d'origine tunisienne!",
    "qui a developpé ce site?":"Firas, Tom, Mohand, Sana",
    "qui est vous?":"Mon nom c'est Muscle Max Rotella",
    "c'est quoi votre role?":"Je suis ici pour vous guider!",
    "raconte moi une blague":"Pourquoi les haltères vont-ils à léglise tous les dimanches ? Pour avoir des biceps-témoins !",
    "une autre":"Je ne suis pas un jeu hein!",
    "who are you": "My name is Muscle Max Bot",
    "defaultmsg": "Je ne comprends pas votre texte. Pouvez-vous s'il vous plaît répéter"
  }
  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    setTimeout(() => {
      this.conversation.next([botMessage]);
    }, 1500);
  }
  getBotMessage(question: string) {
    const questionKey = question.toLowerCase() as keyof typeof this.messageMap;
    let answer = this.messageMap[questionKey];
    return answer || this.messageMap['defaultmsg'];
  }


entierAleatoire(min:number, max:number)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

differents(propositions: string[], proposition: string) {

  for(let p in propositions) {
    if(p === proposition) {
      return false;
    }
  }
  return true;
}

getPropositions(nombre: number) {
    let propositions: string[] = [];
    let iter = 0;

    out:
    while(iter < nombre) {
      for (let proposition in this.messageMap) {
        if(iter < nombre) {
          let alea = this.entierAleatoire(0, 100);
          if(alea == 0 && proposition != "defaultmsg" && this.differents(propositions, proposition)) {
            propositions.push(proposition);
            iter++;
          }
        } else {
          break out;
        }
      }
    }

    return propositions;
  }
}
