import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './shared/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './shared/register/register.component';
import { WelcomePageComponent } from './shared/welcome-page/welcome-page.component';
import { WelcomeComponent } from './Component/welcome/welcome.component';
import { ContactUSComponent } from './shared/contact-us/contact-us.component';
import { AboutUSComponent } from './shared/about-us/about-us.component';
import { NewexamComponent } from './Teacher/Componants/newexam/newexam/newexam.component';
import { SubjectComponent } from './Teacher/Componants/subject/subject/subject.component';
import { ExamComponent } from './strudent/component/exam/exam.component';
 


const routes: Routes = [
  
  { path: '', component: WelcomePageComponent},
  {path:'login' , component:LoginFormComponent},
  {path:'newExam' , component:NewexamComponent},
  {path:'courses' , component:SubjectComponent},
  {path:'Contactus' , component:ContactUSComponent}, 
  {path:'aboutus' , component:AboutUSComponent}, 
  {path:'exam/:id' , component:ExamComponent}, 
  { path: 'register', component: RegisterComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
