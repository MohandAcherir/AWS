import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lbeginner',
  templateUrl: './beginner.component.html',
  styleUrls: ['./beginner.component.css']
})
export class GbeginnerComponent implements OnInit {

  slides: any[] = new Array(4).fill({id: -1, src: '', title: '', ex1: '', ex2: '', ex3:'', ex4 :'', desc: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: '../../../../../assets/images/schedule-bg.jpg',
      title: 'Jour 1:',
      ex1: '1. 5 minutes de course lente',
      ex2: '2. Tractions - 5x6 reps',
      ex3: '3. Squates - 5x6 reps',
      ex4: '4. Bench Press - 5x6 reps',
      desc: 'Footing (5 minutes) : Commencez par une course légère sur place ou à l\'extérieur, en maintenant un rythme modéré pendant cinq minutes. Cela permet d\'échauffer les muscles et d\'augmenter la fréquence cardiaque pour préparer le corps à l\'effort. Tractions : Pour cet exercice, vous aurez besoin d\'une barre de traction. Placez-vous sous la barre en la saisissant avec une prise en pronation (paumes des mains tournées vers l\'extérieur). En utilisant principalement la force de vos bras et de votre dos, tirez-vous vers le haut jusqu\'à ce que votre menton atteigne ou dépasse la barre. Redescendez ensuite de manière contrôlée jusqu\'à la position de départ. Effectuez autant de tractions que vous pouvez en gardant une bonne technique. Squats : Les squats sont un excellent exercice pour renforcer les muscles des jambes et des fessiers. Tenez-vous debout, les pieds légèrement plus écartés que la largeur des épaules. Fléchissez les genoux et abaissez-vous en gardant le dos droit, comme si vous vous asseyiez sur une chaise imaginaire. Poussez ensuite avec vos talons pour revenir à la position debout. Répétez le mouvement en effectuant autant de squats que vous pouvez tout en maintenant une bonne forme. Bench press (développé couché) : Pour cet exercice, vous aurez besoin d\'un banc de musculation et d\'un haltère ou d\'une barre de poids appropriée. Allongez-vous sur le banc, les pieds posés au sol. Tenez l\'haltère ou la barre au niveau de votre poitrine, les mains légèrement plus écartées que la largeur des épaules. Poussez l\'haltère ou la barre vers le haut en étendant vos bras, puis abaissez-le lentement jusqu\'à la position de départ. Répétez le mouvement pour effectuer autant de répétitions que vous pouvez tout en maintenant une bonne forme.'
    };
    this.slides[1] = {
      id: 1,
      src: '../../../../../assets/images/schedule-bg.jpg',
      title: 'Jour 2:',
      ex1: '1. 5 minutes de course lente',
      ex2: '2. Tractions - 5x6 reps',
      ex3: '3. Farmer\'s walk - 5x6 reps',
      ex4: '4. Dips - 5x6 reps',
      desc: '    Footing (5 minutes) : Commencez par une course légère sur place ou à l\'extérieur pendant cinq minutes pour échauffer les muscles et augmenter votre fréquence cardiaque. Tractions : Pour cet exercice, vous aurez besoin d\'une barre de traction. Suspendez-vous à la barre avec une prise en pronation (paumes des mains tournées vers l\'extérieur). En utilisant principalement la force de vos bras et de votre dos, tirez-vous vers le haut jusqu\'à ce que votre menton atteigne ou dépasse la barre. Redescendez ensuite de manière contrôlée jusqu\'à la position de départ. Effectuez autant de tractions que vous pouvez tout en maintenant une bonne technique. Farmer\'s Walk : Pour cet exercice, vous aurez besoin de deux poids lourds ou deux haltères de poids équivalent. Tenez-vous debout, un poids dans chaque main, bras le long du corps. Marchez sur une courte distance en maintenant une bonne posture et en gardant les épaules basses. Les farmer\'s walk sollicitent principalement les muscles des bras, des épaules, du dos et du noyau tout en améliorant la force de préhension. Dips : Pour cet exercice, vous aurez besoin de deux barres parallèles de hauteur appropriée. Placez-vous entre les barres et saisissez-les avec une prise en pronation (paumes des mains tournées vers l\'arrière). Soulevez-vous en étendant les bras, puis fléchissez les coudes pour descendre votre corps vers le sol. Poussez ensuite avec vos bras pour revenir à la position de départ. Effectuez autant de dips que vous pouvez tout en maintenant une bonne forme.'
    };
    this.slides[2] = {
      id: 2,
      src: '../../../../../assets/images/schedule-bg.jpg',
      title: 'Jour 3 :',
      ex1: '1. 5 minutes de course lente',
      ex2: '2. Tractions - 5x6 reps',
      ex3: '3. Squates - 5x6 reps',
      ex4: '4. Bench Press - 5x6 reps',
      desc: 'Footing (5 minutes) : Commencez par une course légère sur place ou à l\'extérieur, en maintenant un rythme modéré pendant cinq minutes. Cela permet d\'échauffer les muscles et d\'augmenter la fréquence cardiaque pour préparer le corps à l\'effort. Tractions : Pour cet exercice, vous aurez besoin d\'une barre de traction. Placez-vous sous la barre en la saisissant avec une prise en pronation (paumes des mains tournées vers l\'extérieur). En utilisant principalement la force de vos bras et de votre dos, tirez-vous vers le haut jusqu\'à ce que votre menton atteigne ou dépasse la barre. Redescendez ensuite de manière contrôlée jusqu\'à la position de départ. Effectuez autant de tractions que vous pouvez en gardant une bonne technique. Squats : Les squats sont un excellent exercice pour renforcer les muscles des jambes et des fessiers. Tenez-vous debout, les pieds légèrement plus écartés que la largeur des épaules. Fléchissez les genoux et abaissez-vous en gardant le dos droit, comme si vous vous asseyiez sur une chaise imaginaire. Poussez ensuite avec vos talons pour revenir à la position debout. Répétez le mouvement en effectuant autant de squats que vous pouvez tout en maintenant une bonne forme. Bench press (développé couché) : Pour cet exercice, vous aurez besoin d\'un banc de musculation et d\'un haltère ou d\'une barre de poids appropriée. Allongez-vous sur le banc, les pieds posés au sol. Tenez l\'haltère ou la barre au niveau de votre poitrine, les mains légèrement plus écartées que la largeur des épaules. Poussez l\'haltère ou la barre vers le haut en étendant vos bras, puis abaissez-le lentement jusqu\'à la position de départ. Répétez le mouvement pour effectuer autant de répétitions que vous pouvez tout en maintenant une bonne forme.'
    };
    this.slides[3] = {
      id: 3,
      src: '../../../../../assets/images/schedule-bg.jpg',
      title: 'Jour 4 :',
      ex1: '1. 5 minutes de course lente',
      ex2: '2. Tractions - 5x6 reps',
      ex3: '3. Farmer\'s walk - 5x6 reps',
      ex4: '4. Dips - 5x6 reps',
      desc: '    Footing (5 minutes) : Commencez par une course légère sur place ou à l\'extérieur pendant cinq minutes pour échauffer les muscles et augmenter votre fréquence cardiaque. Tractions : Pour cet exercice, vous aurez besoin d\'une barre de traction. Suspendez-vous à la barre avec une prise en pronation (paumes des mains tournées vers l\'extérieur). En utilisant principalement la force de vos bras et de votre dos, tirez-vous vers le haut jusqu\'à ce que votre menton atteigne ou dépasse la barre. Redescendez ensuite de manière contrôlée jusqu\'à la position de départ. Effectuez autant de tractions que vous pouvez tout en maintenant une bonne technique. Farmer\'s Walk : Pour cet exercice, vous aurez besoin de deux poids lourds ou deux haltères de poids équivalent. Tenez-vous debout, un poids dans chaque main, bras le long du corps. Marchez sur une courte distance en maintenant une bonne posture et en gardant les épaules basses. Les farmer\'s walk sollicitent principalement les muscles des bras, des épaules, du dos et du noyau tout en améliorant la force de préhension. Dips : Pour cet exercice, vous aurez besoin de deux barres parallèles de hauteur appropriée. Placez-vous entre les barres et saisissez-les avec une prise en pronation (paumes des mains tournées vers l\'arrière). Soulevez-vous en étendant les bras, puis fléchissez les coudes pour descendre votre corps vers le sol. Poussez ensuite avec vos bras pour revenir à la position de départ. Effectuez autant de dips que vous pouvez tout en maintenant une bonne forme.'
    };  }
}
