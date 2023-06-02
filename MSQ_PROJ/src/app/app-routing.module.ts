import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './shared/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './shared/register/register.component';
import { WelcomePageComponent } from './shared/welcome-page/welcome-page.component';
import { WelcomeComponent } from './Component/welcome/welcome.component';
 


const routes: Routes = [
  {path:'login' , component:LoginFormComponent},
  { path: '', component: WelcomePageComponent},
  { path: 'register', component: RegisterComponent }
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
