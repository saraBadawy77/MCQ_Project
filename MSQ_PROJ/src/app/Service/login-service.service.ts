import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }
  createUser(model:any){
    return this.http.post(" http://localhost:3000/Students",model)
  }
}
