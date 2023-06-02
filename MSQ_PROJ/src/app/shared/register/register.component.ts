import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router,Route } from '@angular/router';
import { DataServiceService } from 'src/app/Service/data-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  existEmail:any;
  constructor(private dataService:DataServiceService ,private router:Router){}
 registForm =new FormGroup({
    name:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(3)]),
    email:new FormControl("",[Validators.required,Validators.email]),
    password : new FormControl("",[Validators.required,Validators.minLength(5)]),
  })
  get getStudentName(){
    return this.registForm.controls['name'];
  }

  get getStudentEmail(){
    return this.registForm.controls['email'];
  }

  get getStudentPassword(){
    return this.registForm.controls['password'];
  }
 
  registOperation(e:Event){
    e.preventDefault();
    if(this.registForm.status=="VALID")
    {      
      this.dataService.addStudent(this.registForm.value)
      .subscribe(()=>{this.router.navigate(['login'])})
    }

  }

}
