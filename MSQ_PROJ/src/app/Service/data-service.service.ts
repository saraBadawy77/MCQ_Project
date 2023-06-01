import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  studentsUrl:string="http://localhost:3000/Students"
  constructor(private http:HttpClient ) {}
  getStudentbyId(studentId:number){
    return this.http.get(`${this.studentsUrl}/${studentId}`)
  }

  addStudent(student:any){
    return this.http.post(this.studentsUrl,student)
  }

}
