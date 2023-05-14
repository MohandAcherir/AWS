import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lbeginner',
  templateUrl: './intermediate.component.html',
  styleUrls: ['./intermediate.component.css']
})
export class LintermediateComponent implements OnInit {

  slides: any[] = new Array(4).fill({id: -1, src: '', title: '', ex1: '', ex2: '', ex3:'', ex4 :'', desc: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: '../../../../../assets/images/schedule-bg.jpg',
      title: 'Jour 1:',
      ex1: '1. 20 minutes de course lente',
      ex2: '2. Burpees - 5x10 reps',
      ex3: '3. Crunchs - 5x10 reps',
      ex4: '4. squates - 5x10 reps',
      desc: '    Footing (20 minutes) : Démarrez par un footing léger pendant 10 minutes pour augmenter votre rythme cardiaque et préparer votre corps à l\'effort. Burpees : Effectuez 5 séries de 10 répétitions de burpees. Pour cela, commencez debout, puis descendez en position accroupie, placez vos mains au sol et sautez en arrière pour vous retrouver en position de planche. Faites une pompe, ramenez vos pieds vers vos mains et terminez par un saut vertical avec les bras levés au-dessus de votre tête. Crunchs : Enchaînez avec 5 séries de 10 crunchs. Allongez-vous sur le dos, pliez les genoux et placez vos mains derrière les oreilles ou croisées sur la poitrine. Contractez vos abdominaux et soulevez légèrement le torse du sol en roulant les épaules vers l\'avant. Redescendez lentement vers le sol. Squats : Terminez avec 5 séries de 10 squats. Tenez-vous debout, les pieds écartés à la largeur des épaules. Fléchissez les genoux et descendez les hanches comme si vous vous asseyiez, en gardant le dos droit. Remontez en poussant sur les talons pour revenir en position debout.'
    };
    this.slides[1] = {
      id: 1,
      src: '../../../../../assets/images/schedule-bg.jpg',
      title: 'Jour 2:',
      ex1: '1. 20 mins de course lente',
      ex2: '2. Pompes - 5x10 reps',
      ex3: '3. Accélérations - 5x 30metres',
      desc: 'Footing (20 minutes) : Après l\'échauffement, passez à un footing d\'une intensité modérée. Courez à un rythme qui vous permet de maintenir une conversation tout en vous sentant légèrement essoufflé. L\'objectif est d\'augmenter votre fréquence cardiaque et d\'améliorer votre endurance cardiovasculaire. Essayez de maintenir ce rythme pendant 20 minutes. Pompes (5 séries de 10 répétitions) : Les pompes sont un excellent exercice pour renforcer vos muscles du haut du corps, y compris les bras, les épaules et les muscles de la poitrine. effectuer 10 pompes. Faites 5 séries avec une courte pause de récupération entre chaque série. Accélérations (5 séries de 30metres) : Les accélérations sont des sprints courts mais intenses qui aident à développer la vitesse et l\'explosivité.'
    };
    this.slides[2] = {
      id: 2,
      src: '../../../../../assets/images/schedule-bg.jpg',
      title: 'Jour 3 :',
      ex1: '1. 20 min de corde à sauter',
      ex2: '2. Jumping jacks - 5x12 reps',
      ex3: '3. Burpees - 5x12 reps',
      desc: 'Cet entraînement combine la corde à sauter pour le cardio, les jumping jacks pour l\'endurance et les burpees pour la force et l\'explosivité. Il offre une séance complète qui travaille tout le corps et est idéal pour les débutants. Assurez-vous de vous hydrater et de vous échauffer correctement avant de commencer, et prenez des pauses de récupération si nécessaire.Corde à sauter (20 minutes) : Utilisez une corde à sauter pour une séance de 20 minutes. Commencez par sauter à un rythme modéré, en gardant une bonne posture et en utilisant vos poignets pour faire tourner la corde. Vous pouvez alterner entre sauter à deux pieds et alterner les pieds pour plus de variété. Essayez de maintenir un rythme régulier tout au long de la séance. Jumping jacks (5 séries de 12 répétitions) : Les jumping jacks sont un exercice cardiovasculaire efficace qui sollicite tout le corps: Burpees (5 séries de 12 répétitions) : Les burpees sont un exercice complet qui combine des mouvements de saut, de pompe et de squat.'
    };
    this.slides[3] = {
      id: 3,
      src: '../../../../../assets/images/schedule-bg.jpg',
      title: 'Jour 4 :',
      ex1: '1. 20 minutes de course lente',
      ex2: '2. 10 minutes de corde à sauter',
      ex3: '3. Accélérations 5x 20metres',
      ex4: '4. 10 minutes de stretching et relachement',
      desc: 'Course lente (20 minutes) : Passez ensuite à une course lente d\'intensité modérée. Courez à un rythme confortable qui vous permet de maintenir une conversation. L\'objectif est d\'améliorer votre endurance cardiovasculaire et de renforcer vos muscles. Essayez de maintenir ce rythme pendant 20 minutes. Corde à sauter (10 minutes) : Utilisez une corde à sauter pour une séance de 10 minutes. Commencez par sauter à un rythme modéré et régulier. Utilisez vos poignets pour faire tourner la corde et essayez de garder une bonne posture tout au long de l\'exercice. Vous pouvez varier le style de saut en alternant entre sauts à deux pieds, sauts à un pied, sauts croisés, etc. Accélérations (5 séries de 20 metres) : Les accélérations sont des sprints courts mais intenses qui aident à développer la vitesse et l\'explosivité. Voici comment les réaliser. Stretching (5 minutes) : Terminez votre entraînement par une séance d\'étirements pour détendre vos muscles et favoriser leur récupération. Concentrez-vous sur les principaux groupes musculaires sollicités pendant votre séance, tels que les jambes, les bras, les épaules et les muscles du dos. Effectuez des étirements doux et maintenez chaque position pendant environ 15 à 30 secondes.'
    };
  }
}
