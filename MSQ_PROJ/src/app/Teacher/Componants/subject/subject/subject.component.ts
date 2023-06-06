
import { Component, OnInit } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NewexamService } from 'src/app/Teacher/services/newexam.service';
import { AuthService } from 'src/app/auth/sevices/auth.service';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  user:any={}; 
  subjects:any[]=[];
  constructor( private services:NewexamService,private auth:AuthService,private toastr:ToastrService){}

  ngOnInit(): void {  
   this.allsubject(); 
   this.getuserinfo();
  }
  allsubject(){
  this.services.getallsubject().subscribe((res:any)=>{
    this.subjects=res

  })}
  getuserinfo(){
    this.auth.getRole().subscribe(res=>{
      this.user=res; 
  })
  }
  deleteCourse(index:number) {
  let id = this.subjects[index].id;
  this.subjects.splice(index, 1);
  this.services.deleteco(id).subscribe(res => {
  this.toastr.success("Course has been successfully deleted");});
  }
}

