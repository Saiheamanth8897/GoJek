import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-four',
  templateUrl: './question-four.component.html',
  styleUrls: ['./question-four.component.scss']
})
export class QuestionFourComponent implements OnInit {
enteredData = ''
  constructor() { }

  ngOnInit(): void {
  }
  postMessage(data: any) {
    console.log(data);
    this.enteredData = data
  }
}
