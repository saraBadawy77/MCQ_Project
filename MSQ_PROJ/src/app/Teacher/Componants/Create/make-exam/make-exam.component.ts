import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-make-exam',
  templateUrl: './make-exam.component.html',
  styleUrls: ['./make-exam.component.css']

})
export class MakeExamComponent {
  
  SubjectName = new FormControl('', [Validators.required]);
  question=new FormControl('', [Validators.required]);
  getErrorMessage() {
    if (this.SubjectName.hasError('required')) {
      return 'You must enter the course name';
    } else if (this.question.hasError('required')) {
      return 'You must enter the question';
    } else {
      return '';
    }
  }
  
  


  
}
