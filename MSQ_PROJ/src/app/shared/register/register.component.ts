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
    studentName:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(3)]),
    studentEmail:new FormControl("",Validators.required),
    studentPassword : new FormControl("",[Validators.required,Validators.minLength(5)]),
  })
  get getStudentName(){
    return this.registForm.controls['studentName'];
  }

  get getStudentEmail(){
    return this.registForm.controls['studentEmail'];
  }

  get getStudentPassword(){
    return this.registForm.controls['studentPassword'];
  }
 
  registOperation(e:Event){
    e.preventDefault();
    // console.log(this.getStudentName);
    // console.log(this.getStudentEmail);
    // console.log(this.getStudentPassword);

    if(this.registForm.status=="VALID")
    {
      
      this.dataService.addStudent(this.registForm.value)
      .subscribe(()=>{this.router.navigate(['/login'])})
         console.log(this.registForm);

    }

  }

}
