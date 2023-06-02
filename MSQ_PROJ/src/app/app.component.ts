import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { AuthService } from './auth/sevices/auth.service';


@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MSQ Exam ';
  constructor(private service:AuthService){  }
ngOnInit(): void {
  this.getUserData();
}
getUserData(){
    this.service.getRole().subscribe(res=> {
      this.service.user.next(res)
    })}


}
 
