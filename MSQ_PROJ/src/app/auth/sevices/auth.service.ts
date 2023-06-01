import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient) { }

   
  createUser(model:any){
    return this.http.post(" http://localhost:3000/Students",model)
  }
  getUsers(type:string){
    return this.http.get("http://localhost:3000/"+type)
  }
  login(model:any){
    return this.http.put(" http://localhost:3000/logins/1",model)
    }

}
