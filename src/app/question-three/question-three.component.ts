import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-question-three',
  templateUrl: './question-three.component.html',
  styleUrls: ['./question-three.component.scss']
})
export class QuestionThreeComponent implements OnInit {
mobileNumbers: any []= [{mobile_number: ''}]
  constructor() { }

  ngOnInit(): void {
  }

  add_number() {
    let obj: object = {mobile_number: ''}
    this.mobileNumbers.push(obj)

  }
  onSubmit() {
    alert("Data Submitted successfully, please open console and Verify Data")
    console.log("solution for question No 3:", this.mobileNumbers)
  }
}
