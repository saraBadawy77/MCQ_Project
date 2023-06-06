
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { ToastrService } from 'ngx-toastr';
import { NewexamService } from 'src/app/Teacher/services/newexam.service';


@Component({
  selector: 'app-newexam',
  templateUrl: './newexam.component.html',
  styleUrls: ['./newexam.component.css']
})
export class NewexamComponent  implements OnInit{


  gonext:boolean=true;
  gonext2:boolean=true;
  
    coursename=new FormControl("");
    questions:any[]=[];
    questionsform!:FormGroup;
    correctNum:any;
    id:any;
  constructor(private fd :FormBuilder ,
    private toastr: ToastrService,
    private newservices:NewexamService
    
    
    ) { }
    
   ngOnInit(): void {
   this.createform();
  }
  createform(){
    this.questionsform = this.fd.group({
      question:['',[Validators.required]],
      answer1:['',[Validators.required]],
      answer2:['',[Validators.required]]
    })
  }
  create(){
    if( this.correctNum){
    const model={
      question:this.questionsform.value.question,
      answer1:this.questionsform.value.answer1,
      answer2:this.questionsform.value.answer2,
      correctanswer:this.questionsform.value[this.correctNum]
    }
    this.questions.push(model)
   this.questionsform.reset();
    }else{
      this.toastr.error("Choose the correct answer")
    }  
  }
  getcorrect(event:any) {
    this.correctNum = event.target.value
  }
  resetform(){
    this.questionsform.reset();
  }
  Cancel(){
    this.questionsform.reset();
    this.questions=[];
    this.tabGroup.selectedIndex = 0;
    this.coursename.reset();
    this.gonext=true;
  }
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;
  go(){
  if(this.coursename.value==""){
    this.toastr.error(" Enter Cours Name")
  }else{ 
    this.gonext=false;
    this.tabGroup.selectedIndex = 1; 
  }
  }
  submit() {
    const model = {
      coursename: this.coursename.value,
      questions : this.questions
    };
    if(this.gonext2){
  this.newservices.newexam(model).subscribe((res:any) =>{
    console.log(res);
    this.id=res.id;
    this.gonext2=false;
  })
    }else{
      this.tabGroup.selectedIndex = 2; 
    }  
  }
  deletesubject(index:number){
  this.questions.splice(index,1);
  const model = {
    coursename: this.coursename.value,
    questions: this.questions
  };
  this.newservices.update(model,this.id).subscribe(res=>{
    this.toastr.success(" The Course has been successfully deleted")
  })
  }
}
