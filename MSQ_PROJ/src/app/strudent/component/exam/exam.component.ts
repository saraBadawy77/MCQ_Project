import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/sevices/auth.service';
import {NewexamService  } from 'src/app/Teacher/services/newexam.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  counter=1;
  id:any;
  subject :any;
  user:any;
  studentAnswer:any;
  studentInfo:any
  total:number = 0;
  showResult:boolean = false;
  usersubjects:any[] = [];
  validExam:boolean = true;
  constructor(private route:ActivatedRoute , 
    private service:NewexamService  ,
    private auth :AuthService,
     private toaster:ToastrService) {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getSubject()
    this.getLogedInUser()
   }
  
  ngOnInit(): void {
  }

  
  getSubject() {
    this.service.getsubjectById(this.id).subscribe(res => {
      this.subject = res
    })
  }
  getLogedInUser() {
    this.auth.getRole().subscribe(res=> {
      this.user = res
      this.getUserData()
    })
  }
  getUserData() {
    this.auth.getStudent(this.user.userId).subscribe((res:any) => {
      this.studentInfo = res
      this.usersubjects = res?.subjects ?  res?.subjects : [];
      this.checkValidExam()
    })
  }
  getAnswer(event:any) {
    let value = event.value,
        questionIndex = event.source.name;
        this.subject.questions[questionIndex].studentAnswer = value
        console.log( this.subject.questions)
  }
  checkValidExam() {
    for(let x in this.usersubjects) { 
      if(this.usersubjects[x].id == this.id) {
        this.total = this.usersubjects[x].degree
         this.validExam = false;
         this.toaster.warning("You have already passed this exam")
      }
    }
  }
  getResult() {
    this.total = 0
    for(let x in this.subject.questions) {
      if(this.subject.questions[x].studentAnswer== this.subject.questions[x].correctanswer)
       {
        this.total++
       
      }

    }
    
    this.showResult = true
    this.usersubjects.push({
      name:this.subject.coursename,
      id:this.id,
      degree:this.total
    })
    const model = {
      name: this.studentInfo.name,
      email: this.studentInfo.email,
      password: this.studentInfo.password,
      subjects : this.usersubjects
    }

    this.auth.updateStudent(this.user.userId,model).subscribe(res=>{
this.toaster.success("The result has been registered successfully");
    })
  }




  deleteSubject(index:number) {
    this.subject.questions.splice(index, 1);
    const model={
      name :this.subject.name,
      question:this.subject.questions
    }
    this.service.update(model ,this.id).subscribe(res => {
      this.toaster.success("Question has been successfully deleted");});
      
    }
    


    
    
  


}
