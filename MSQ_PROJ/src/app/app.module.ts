import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RegisterComponent } from './shared/register/register.component';
import { WelcomePageComponent } from './shared/welcome-page/welcome-page.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoginFormComponent } from './shared/login-form/login-form.component';
import { ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { WelcomeComponent } from './Component/welcome/welcome.component';
import { ContactUSComponent } from './shared/contact-us/contact-us.component';
import { AboutUSComponent } from './shared/about-us/about-us.component';
import { NewexamComponent } from './Teacher/Componants/newexam/newexam/newexam.component';
import { SubjectComponent } from './Teacher/Componants/subject/subject/subject.component';
import { ExamComponent } from './strudent/component/exam/exam.component';
import { AllstudentsComponent } from './Teacher/Componants/allstudents/allstudents.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    WelcomePageComponent,
    LoginFormComponent,
    WelcomeComponent,
    ContactUSComponent,
    AboutUSComponent,
    NewexamComponent,
    SubjectComponent,
    ExamComponent,
    AllstudentsComponent
  
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ToastNoAnimationModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
     MatInputModule,
      FormsModule, 
      ReactiveFormsModule,
       NgIf,
       
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



