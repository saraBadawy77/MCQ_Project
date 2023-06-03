
import { Component, OnInit } from '@angular/core';
import { NewexamService } from 'src/app/Teacher/services/newexam.service';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subjects:any[]=[];
constructor( private services:NewexamService
  ){}
  ngOnInit(): void {
   this.allsubject();
  }


  allsubject(){
this.services.getallsubject().subscribe((res:any)=>{
  this.subjects=res

})

  }
}
