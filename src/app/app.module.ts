import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionOneComponent } from './question-one/question-one.component';
import { QuestionTwoComponent } from './question-two/question-two.component';
import { QuestionThreeComponent } from './question-three/question-three.component';
import { QuestionFourComponent } from './question-four/question-four.component';
import { HomeComponent } from './home/home.component';
import { ComponentXComponent } from './question-two/component-x/component-x.component';
import { CommonService } from './common.service';
import { ComponentYComponent } from './question-two/component-x/component-y/component-y.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemAComponent } from './question-four/item-a/item-a.component';
import { ItemBComponent } from './question-four/item-b/item-b.component';
import { ItemCComponent } from './question-four/item-c/item-c.component';
import { ItemDComponent } from './question-four/item-d/item-d.component';
import { ItemEComponent } from './question-four/item-e/item-e.component';
@NgModule({
  declarations: [
    AppComponent,
    QuestionOneComponent,
    QuestionTwoComponent,
    QuestionThreeComponent,
    QuestionFourComponent,
    HomeComponent,
    ComponentXComponent,
    ComponentYComponent,
    ItemAComponent,
    ItemBComponent,
    ItemCComponent,
    ItemDComponent,
    ItemEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
