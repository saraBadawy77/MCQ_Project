import { Component, OnInit } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio'
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { LoginServiceService } from 'src/app/Service/login-service.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/sevices/auth.service';
//import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Route } from '@angular/router';
import { DataServiceService } from 'src/app/Service/data-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  myForm!: FormGroup;  
  users:any[]=[]
  type:string ="students"
  constructor(private http:HttpClient ,private fb: FormBuilder ,private service:AuthService  , private router:Router , private toaster:ToastrService){  }

  ngOnInit(): void {
  this.createForm();
  this.getUsers();
}
createForm() {
  this.myForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    type:[this.type] 
  });
}
submit()
{
  let index = this.users.findIndex(item => item.email== this.myForm.value.email &&item.password==this.myForm.value.password)
  if(index==-1)
  {
    this.toaster.error("Check Email or Password", "" , {
      disableTimeOut: false,
      titleClass: "toastr_title",
      messageClass: "toastr_message",
      timeOut:5000,
      closeButton: true, } )
  }
  else
  {
    const model = {
      name:this.users[index].name,
      role:this.type,
      userId:this.users[index].id
    }
    this.service.login(model).subscribe(res => {
      this.service.user.next(res)
      this.toaster.success("Login Successfully" , "" , {
        disableTimeOut: false,
        titleClass: "toastr_title",
        messageClass: "toastr_message",
        timeOut:5000,
        closeButton: true,
      })
      this.router.navigate(['/courses'])
    })
  }
}
getUsers() 
{
  this.service.getUsers(this.type).subscribe((res:any) => {this.users = res})
}
getRole(event:any) {
  this.type = event.value
  this.getUsers()
} 
}




