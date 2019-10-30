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
import { ChallengeResultComponent } from './shared/challenge-result/challenge-result.component';
import { FinalPageComponent } from './e-commerce/final-page/final-page.component';
import { UserNameComponent } from './e-commerce/user-name/user-name.component';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  a11y: true,
  direction: 'horizontal',
  keyboard: true,
  mousewheel: true,
  scrollbar: false,
  navigation: true,
  pagination: false,
  loop: true
};
@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    ScenarioComponent,
    TextQuestionComponent,
    ChallengeResultComponent,
    FinalPageComponent,
    UserNameComponent
  ],
  imports: [
    BrowserModule,
    O2OModule,
    BrowserAnimationsModule,
    MatButtonModule,
    SwiperModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
