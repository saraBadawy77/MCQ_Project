import { Component, OnInit } from '@angular/core';
// import {MatRadioModule} from '@angular/material/radio'
import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router,Route } from '@angular/router';
import { DataServiceService } from 'src/app/Service/data-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.http.get("http://localhost:3000/Students").subscribe(res=>{
      console.log(res)
    })
  }
}
