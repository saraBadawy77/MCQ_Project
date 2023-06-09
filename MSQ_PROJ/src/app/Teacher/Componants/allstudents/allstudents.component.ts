import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/sevices/auth.service';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent {

  datasource:any;
  datatable:any;

  constructor(
    private services:AuthService
  )
  {
   this.getAllStudents();

  }


  getAllStudents() {
    this.services.getUsers('students').subscribe((res:any) => {
      this.datasource = res?.map((subj: any) => {
        if ( subj?.subjects){
        return subj?.subjects?.map((sub: any) => {
          return {
            name: subj.name,
            subjectName: sub.name,
            degree: sub.degree
          };
          


        });}else{
          return [{
            name: subj.name,
            subjectName: "*",
            degree: "*"
          }];

        }
      });
    this.datatable=[];

      this.datasource.forEach((item:any) => {
        item.forEach((subitem:any) => {
          this.datatable.push(
            {
              name:subitem.name,
              subjectName: subitem.subjectName,
              degree:subitem.degree

            }
          );
          
        });
      });
      
      
    });
  }
  
  deleteStudent(studentId: number) {
    this.services.deleteStudent(studentId).subscribe(() => {
       
      this.getAllStudents();
    });
  }



}
