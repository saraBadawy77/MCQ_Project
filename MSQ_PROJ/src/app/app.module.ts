import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomePageComponent } from './shared/welcome-page/welcome-page.component';
import { LoginFormComponent } from './shared/login-form/login-form.component';
import { RegisterComponent } from './shared/register/register.component';
import {MatRadioModule} from '@angular/material/radio'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
    WelcomePageComponent,
    LoginFormComponent,
    
    RegisterComponent
  ],
  imports: [
    MatSlideToggleModule,
    MatRadioModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
