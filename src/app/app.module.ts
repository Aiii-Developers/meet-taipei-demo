import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { O2OModule } from './o2o/o2o.module';
import { QuestionComponent } from './shared/question/question.component';
import { ScenarioComponent } from './shared/scenario/scenario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { TextQuestionComponent } from './shared/text-question/text-question.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    ScenarioComponent,
    TextQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    O2OModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
