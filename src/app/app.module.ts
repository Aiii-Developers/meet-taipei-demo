import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { O2OModule } from './o2o/o2o.module';
import { QuestionComponent } from './shared/question/question.component';
import { ScenarioComponent } from './shared/scenario/scenario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    ScenarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    O2OModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
