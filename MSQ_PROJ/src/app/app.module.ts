import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomePageComponent } from './shared/welcome-page/welcome-page.component';
import { MakeExamComponent } from './Teacher/Componants/Create/make-exam/make-exam.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomePageComponent,
    MakeExamComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
