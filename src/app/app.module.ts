import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { Router, ActivatedRoute } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImcCalculatorComponent } from './im-calcul/im-calcul.component';
import { CalorieCalculComponent } from './calorie-calcul/calorie-calcul.component';
import { ProductsPagesComponent } from './pages/products/products.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ChatButtonComponent } from './sharepage/chatbutton/chatbutton.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { ApiService } from './pages/login/api.service';
import { AuthService } from './pages/login/auth.service';
import { MessagesComponent } from './pages/login/messages.component';
import { RegisterComponent } from './pages/login/register.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersComponent } from './pages/login/users.component';
import { ProfileComponent } from './pages/login/profile.component';
import { PostComponent } from './pages/login/post.component';
import { AuthInterceptorService } from './pages/login/authInterceptor.service';
import { AngularBotComponent } from './pages/angular-bot/angular-bot.component';
import { ArticleComponent } from './pages/sousArticles/article.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ChatService } from './services/chat.service';

import { MapComponent } from './pages/map/map.component';
import { SousArticle1Component } from './pages/sousArticles/sous-article1/sous-article1.component';
import { SousArticle2Component } from './pages/sousArticles/sous-article2/sous-article2.component';
import { SousArticle3Component } from './pages/sousArticles/sous-article3/sous-article3.component';
import { SousArticle4Component } from './pages/sousArticles/sous-article4/sous-article4.component';
import { SousArticle5Component } from './pages/sousArticles/sous-article5/sous-article5.component';
import { SousArticle6Component } from './pages/sousArticles/sous-article6/sous-article6.component';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsPagesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'post', component: PostComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UsersComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'article/:title', component: ArticleComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: 'chatbot',component:AngularBotComponent},
  {path: 'todolist', component:TodolistComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ImcCalculatorComponent,
    CalorieCalculComponent,
    ProductsPagesComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    MenupageComponent,
    MessagesComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    ProfileComponent,
    PostComponent,
    ArticlesComponent,
    MapComponent,
    ArticleComponent,
    AngularBotComponent,
    SousArticle1Component,
    SousArticle2Component,
    SousArticle3Component,
    SousArticle4Component,
    SousArticle5Component,
    SousArticle6Component,
    TodolistComponent,
    ProductsComponent,
    ChatButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSliderModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [ApiService, AuthService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
