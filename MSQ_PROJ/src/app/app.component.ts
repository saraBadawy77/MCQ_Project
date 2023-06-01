import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MSQ_PROJ';
}
  // registForm =new FormGroup({
  //   studentName:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(20)]),
  //   studentEmail:new FormControl("",Validators.required),
  //   studentPassword : new FormControl("",[Validators.required,Validators.minLength(5)]),


  // })