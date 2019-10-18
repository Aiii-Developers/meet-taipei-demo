import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScenarioComponent } from './shared/scenario/scenario.component';
import { TextQuestionComponent } from './shared/text-question/text-question.component';

const routes: Routes = [
  { path: 'two', component: ScenarioComponent, data: { path: '../assets/gif/2句.gif' } },
  { path: 'three', component: ScenarioComponent, data: { path: '../assets/gif/3句.gif' } },
  { path: 'four', component: ScenarioComponent, data: { path: '../assets/gif/4句.gif' } },
  { path: '', component: TextQuestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
