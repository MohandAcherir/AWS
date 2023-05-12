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
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { YouTubePlayerModule } from "@angular/youtube-player";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImcCalculatorComponent } from './im-calcul/im-calcul.component';
import { CalorieCalculComponent } from './calorie-calcul/calorie-calcul.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { LweightComponent } from './pages/programs/lweight/lweight.component';
import { LbeginnerComponent } from './pages/programs/lweight/beginner/beginner.component';
import { LintermediateComponent } from './pages/programs/lweight/intermediate/intermediate.component';
import { LheroComponent } from './pages/programs/lweight/hero/hero.component';
import { GmuscleComponent } from './pages/programs/gmuscle/gmuscle.component';
import { GbeginnerComponent } from './pages/programs/gmuscle/beginner/beginner.component';
import { GintermediateComponent } from './pages/programs/gmuscle/intermediate/intermediate.component';
import { GheroComponent } from './pages/programs/gmuscle/hero/hero.component';
import { GshreddedComponent } from './pages/programs/gshredded/gshredded.component';
import { GSbeginnerComponent } from     './pages/programs/gshredded/beginner/beginner.component';
import { GSintermediateComponent } from './pages/programs/gshredded/intermediate/intermediate.component';
import { GSheroComponent } from         './pages/programs/gshredded/hero/hero.component';
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
import { CarouselModule } from '@coreui/angular';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'post', component: PostComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UsersComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: 'programs', component: ProgramsComponent},
  {path: 'programs/lweight', component: LweightComponent},
  {path: 'programs/gmuscle', component: GmuscleComponent},
  {path: 'programs/gshredded', component: GshreddedComponent},
  {path: 'programs/lweight/beginner', component: LbeginnerComponent},
  {path: 'programs/lweight/intermediate', component: LintermediateComponent},
  {path: 'programs/lweight/hero', component: LheroComponent},
  {path: 'programs/gmuscle/beginner', component: GbeginnerComponent},
  {path: 'programs/gmuscle/intermediate', component: GintermediateComponent},
  {path: 'programs/gmuscle/hero', component: GheroComponent},
  {path: 'programs/gshredded/beginner', component: GSbeginnerComponent},
  {path: 'programs/gshredded/intermediate', component: GSintermediateComponent},
  {path: 'programs/gshredded/hero', component: GSheroComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ImcCalculatorComponent,
    CalorieCalculComponent,
    ProductsComponent,
    ProgramsComponent,
    LweightComponent,
    GshreddedComponent,
    GmuscleComponent,
    LbeginnerComponent,
    LintermediateComponent,
    LheroComponent,
    GbeginnerComponent,
    GintermediateComponent,
    GheroComponent,
    GSbeginnerComponent,
    GSintermediateComponent,
    GSheroComponent,
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
    ArticlesComponent
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
    MatProgressBarModule,
    CarouselModule,
    YouTubePlayerModule
  ],
  providers: [ApiService, AuthService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
