import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
 constructor(){}
 ngOnInit():void{}
 produit=[
  {'id':1,'name':'','description':'','image':'../../assets/prodimg/image2.jpeg'},
  {'id':2,'name':'','description':'','image':'../../assets/prodimg/image3.jpeg'},
  {'id':3,'name':'','description':'','image':'../../assets/prodimg/image4.jpeg'},
  {'id':4,'name':'','description':'','image':'../../assets/prodimg/image5.jpg'},
  {'id':5,'name':'','description':'','image':'../../assets/prodimg/image6.jpg'},
  {'id':6,'name':'','description':'','image':'../../assets/prodimg/image7.png'},
  {'id':7,'name':'','description':'','image':'../../assets/prodimg/image8.jpg'},
  {'id':8,'name':'','description':'','image':'../../assets/prodimg/image1.png'},
  {'id':9,'name':'','description':'','image':'../../assets/prodimg/image9.jpg'},
  {'id':10,'name':'','description':'','image':'../../assets/prodimg/image10.jpeg'},
  {'id':11,'name':'','description':'','image':'../../assets/prodimg/image11.png'},
  {'id':12,'name':'','description':'','image':'../../assets/prodimg/image12.jpeg'},
  {'id':13,'name':'','description':'','image':'../../assets/prodimg/image13.jpeg'},
  {'id':14,'name':'','description':'','image':'../../assets/prodimg/image14.jpeg'},
  {'id':15,'name':'','description':'','image':'../../assets/prodimg/image15.jpeg'},
  {'id':16,'name':'','description':'','image':'../../assets/prodimg/image16.png'}
 ]
}
