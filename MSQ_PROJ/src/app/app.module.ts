import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomePageComponent } from './shared/welcome-page/welcome-page.component';
import { TeacherFormComponent } from './Teacher/Teacher_form/teacher-form/teacher-form.component';
import { StudentFormComponent } from './strudent/student-form/student-form.component';
import { LoginFormComponent } from './shared/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomePageComponent,
    TeacherFormComponent,
    StudentFormComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
