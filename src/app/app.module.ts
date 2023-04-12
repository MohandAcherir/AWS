import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImcCalculatorComponent } from './im-calcul/im-calcul.component';
import { CalorieCalculComponent } from './calorie-calcul/calorie-calcul.component';
import {ProductsComponent} from './products/products.component';
@NgModule({
  declarations: [
    AppComponent,
    ImcCalculatorComponent,
    CalorieCalculComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
