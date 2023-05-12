import { animate, animation, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { navbarData } from './nav-data';

interface SideNavToggle{
screenWidth: number;
collapsed:boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter',[
        style({opacity:0}),
        animate('350ms',
        style({opacity:1}))
      ])
    ]),
    trigger('fadeInOut', [
      transition(':leave',[
        style({opacity:1}),
        animate('350ms',
        style({opacity:1}))
      ])
    ]),
    trigger('rotate', [
      transition(':enter',[
        animate('1000ms',
        keyframes([
          style({transform:'rotate(0deg)', offset:'0'}),
          style({transform:'rotate(2turn)', offset:'1'}) 
                  ]))
    ])
  ])
]
})
export class SidenavComponent implements OnInit {
    

     @Output() onToggleSideNav: EventEmitter<SideNavToggle>= new EventEmitter();
     collapsed=false;
     navData=navbarData;
     screenWidth=0;

     @HostListener('window:resize', ['$event'])
     onResize(event:any){
      if(this.screenWidth<=768){
        this.collapsed=false;
        this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth:this.screenWidth});
      }
     }

     ngOnInit(): void {
      this.screenWidth=window.innerWidth;
    }
    

     toggleCollapse():void{
      this.collapsed=!this.collapsed
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth:this.screenWidth});
      ;
     }
     closeSidenav():void{
      this.collapsed=false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth:this.screenWidth});
     }

}
function animat(arg0: string): any {
  throw new Error('Function not implemented.');
}

