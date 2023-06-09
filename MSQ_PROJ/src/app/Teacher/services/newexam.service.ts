import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewexamService {

 
  NEWURL:string="http://localhost:3000/Courses"
  constructor(private http:HttpClient) { }

  newexam(model:any){
    return this.http.post(this.NEWURL,model)
  }
  update( model:any, id:number){
    return this.http.put(`${this.NEWURL}/${id}`,model);
  }

  getallsubject(){
    return this.http.get(this.NEWURL);
  }
  getsubjectById(id:number){
    return this.http.get(this.NEWURL+"/"+id);
  }

  deleteco(id: number) {
    return this.http.delete(`${this.NEWURL}/${id}`);
  }
  

  deleteSubject(studentId: number) {
    return this.http.delete(`${this.NEWURL}/${studentId}`);
  }
  
  

}
