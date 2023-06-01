import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  baseUrl:string="http://localhost:3005/"
  constructor(private http:HttpClient ) {}
  getStudentbyId(studentId:number){
    return this.http.get(`${this.baseUrl}/${studentId}`)
  }

  addStudent(student:any){
    return this.http.post(this.baseUrl,student)
  }

}
