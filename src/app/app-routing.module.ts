import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScenarioComponent } from './shared/scenario/scenario.component';
import { TextQuestionComponent } from './shared/text-question/text-question.component';

const routes: Routes = [
  { path: 'two', component: ScenarioComponent, data: { path: '../assets/gif/2句.gif' } },
  { path: 'three', component: ScenarioComponent, data: { path: '../assets/gif/3句.gif' } },
  { path: 'four', component: ScenarioComponent, data: { path: '../assets/gif/4句.gif' } },
  { path: '',
    component: TextQuestionComponent,
    data:
    {
      buttonsText: ['可以喔，綁定LINE會員即可整合', '啊..這邊金額無法累積喔'],
      questionText: '參加官網跟門市抽獎，公告得獎名單那麼長？我哪有美國時間慢慢查！',
      imagePath: ''
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
