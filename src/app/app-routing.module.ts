import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionFourComponent } from './question-four/question-four.component';
import { QuestionOneComponent } from './question-one/question-one.component';
import { QuestionThreeComponent } from './question-three/question-three.component';
import { QuestionTwoComponent } from './question-two/question-two.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Q1', component: QuestionOneComponent },
  { path: 'Q2', component: QuestionTwoComponent },
  { path: 'Q3', component: QuestionThreeComponent },
  { path: 'Q4', component: QuestionFourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
