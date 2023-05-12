import { Component, OnInit } from '@angular/core';
import {Chart} from 'angular-highcharts';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

chart =new Chart({
  chart:{
    type:'line'
  },
  title:{text:'Taux d inscription'
},
  xAxis:{categories:[
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
},
yAxis: {
  title: {
    text: 'Nombre de clients'
  }
},
series: [
  {
    name: "Perdre le poid",
    type: "line",
    color: '#044342',
    data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196]
  },
  {
    name: 'Musculation',
    type: 'line',
    color: '#7e0505',
    data: [
      47, 52, 44, 35, 58, 69, 32, 53, 71, 82, 99, 159
    ]
  },
  {
    name: 'Cardio',
    type: 'line',
    color: '#ed9e20',
    data: [
      17, 22, 14, 25, 18, 19, 22, 43, 11, 32, 29, 59
    ]
  },
],
credits: {
  enabled: false
}

},

)
chart2 =new Chart({
  chart:{
    type:'Pie'
  },
  title:{text:'Comunauté Inscrite'
},
  xAxis:{categories:[
    'Débutant',
    'amateurs ',
    'athlètes'
    
  ]
},
yAxis: {
  title: {
    text: 'Taux en %'
  }
},
series: [

    {
     type: 'pie',
     data: [
       {
         name: 'Débutant',
         y: 35.0,
         color: '#044342',
       },
       {
         name: 'amateurs ',
         y: 33.8,
         color: '#7e0505',
       },
       {
         name: 'athlètes',
         y: 32,
         color: '#ed9e20',
       },
      
      ]
    },
  ],
credits: {
  enabled: false
}

},

)


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
