import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router) {

  }
  ngOnInit(): void {
  }
  task_questions = [
    {
      question_no: "Q1",
      question: 'Q1. Find the missing number in the series:',
      Problem: ['2,3,10,15,26,35,50,63,?'],
      description: [
        `Implement the solution within Angular in which, a text box is given along with a button.
     User can enter any index of the series and at the button click; the page should display the number
     at that entered index. `,
      ],
    },
    {
      question_no: "Q2",
      question:
        'Q2. Create a dynamic component in Angular which has nested components in the following manner: ',
      Problem: [],
      description: [
        `A. Create a button at the top to add a Component X (like a panel). Every time the button
    is clicked, the component X is added at the bottom. The Component X has a Tab for which we can
    edit the name and save `,
        `B. Within component X, there is another button with text (+) which allows you to add a
    component Y dynamically. Every time the + button Is clicked, component Y is added within
    component X`,
        `C. Component Y has a text box and a save button. When the text is added and save button
    is clicked, the data is saved in a JSON format to a file. You can write the backend for the same
    using node.js. `,
        `D. At the end of the task, you should be able to see the data in the following format: { X1 {
      Y1, Y2 }, X2 { Y3, Y4 } } Where X1, X2 are names of panels of X components and Y1, Y2.. is the text
      saved within the Y component.`,
      ],
    },
    {
      question_no: "Q3",
      question: 'Q3. Make a form having',
      Problem: [` A input for phone number`,
      ` A button to add another number labelled "Add another phone number"`,
      ` A submit button`],
      description: [
        `Upon clicking the "Add another phone number" Button, a new input field should be added to the
        form dynamically. The purpose of this form is to get all the phone numbers that a person holds. If
        the number of input fields for phone number is greater than 1 then, consider adding delete
        buttons to each input field. `, `The "Submit" button should log an array to the console having all the phone numbers in a format`]
    },
    {
      question_no: "Q4",
      question: 'Q4. In the home module make 4 components. Place the 4 components in 4 different corners of the screen like so... ',
      Problem: [],
      description: [
        `Now make a 5th component in the center of the screen having an input field inside its HTML.
        Build a communication system among all 5 components such that the text in the input box is
        displayed in all other components `,
      ]
    },
  ];
  question(i: any){
    this.router.navigateByUrl('/'+i)
  }



}
