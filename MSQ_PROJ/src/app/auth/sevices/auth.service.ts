import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService 
{

  constructor( private http:HttpClient) { }
  user =new Subject()
  createUser(model:any){
    return this.http.post(" http://localhost:3000/Students",model)
  }
  getUsers(type:string){
    return this.http.get("http://localhost:3000/"+type)
  }
  login(model:any){
    return this.http.put("http://localhost:3000/login/1",model)
  }
  getRole(){
    return this.http.get("http://localhost:3000/login/1")
  }
}
