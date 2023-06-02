import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUSComponent {
  contactForm=new FormGroup({
    name:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(3)]),
    email:new FormControl("",[Validators.required,Validators.email]),
    message:new FormControl("",Validators.required)
  })

  // get getName(){
  //   return this.contactForm.controls["name"];
  // }
   
  // get getEmail(){
  //   return this.contactForm.controls["email"];
  // }

  // get getMessage(){
  //   return this.contactForm.controls["message"];
  // }
  sname:any=this.contactForm.controls.name;
  email:any=this.contactForm.controls.email;
  message:any=this.contactForm.controls.message;

}
