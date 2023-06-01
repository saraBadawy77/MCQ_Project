import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 registForm =new FormGroup({
    studentName:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(20)]),
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
 
  registOperation(){
    
  }

}
