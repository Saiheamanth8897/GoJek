import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-one',
  templateUrl: './question-one.component.html',
  styleUrls: ['./question-one.component.scss'],
})
export class QuestionOneComponent implements OnInit {
  value_text: any = '';
  resultant_value: any = '';
  constructor() {}

  ngOnInit(): void {}

  enterd_value_Of_solution() {
    this.resultant_value = ''
    if(this.value_text > 0) {
      if(this.value_text == 1) {
        this.resultant_value = 2;
      }else if(this.value_text % 2 == 0) {
        this.resultant_value = (this.value_text * this.value_text) - 1;
      }else {
        this.resultant_value = (this.value_text * this.value_text) + 1;
      }
    }else {
       this.resultant_value = 1
    }

  }
}
