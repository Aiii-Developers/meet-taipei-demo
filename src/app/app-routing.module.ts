import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScenarioComponent } from './shared/scenario/scenario.component';
import { TextQuestionComponent } from './shared/text-question/text-question.component';
import { QuestionComponent } from './shared/question/question.component';
import { ChallengeResultComponent } from './shared/challenge-result/challenge-result.component';
import { FinalPageComponent } from './shared/final-page/final-page.component';

const o2oRoute = [
  {
    path: 'o2o/test',
    component: ScenarioComponent,
    data:
    {
      liffId: '1565999579-2Gzv3mEl',
      path: '../assets/gif/對話_O2O-開頭.gif',
      nextPage: '/o2o/final',
      buttonText: '已了解情境背景，立即挑戰實作！'
    }
  },
  {
    path: 'o2o',
    component: ScenarioComponent,
    data:
    {
      liffId: '1565999579-YynrAg2P',
      path: '../assets/gif/對話_O2O-開頭.gif',
      nextPage: 'question/1',
      buttonText: '已了解情境背景，立即挑戰實作！'
    }
  },
  {
    path: 'o2o/question/1',
    component: TextQuestionComponent,
    data:
    {
      buttonsText: ['可以喔，綁定LINE會員即可整合', '啊...這邊金額無法累積'],
      questionText: '現在加入LINE會員消費滿3000元就可以參加抽獎，那在門市&官網都有消費，金額是可以累積嗎？',
      imagePath: '../assets/image/chat bot/meet taipei chatbot_1-1.png',
      nextPage: ['/o2o/question/1-1/aiii', '/o2o/question/1-1']
    }
  },
  {
    path: 'o2o/question/1-1/aiii',
    component: ScenarioComponent,
    data:
    {
      path: '../assets/gif/對話_O2O-1-1-1有aiii.gif',
      nextPage: '/o2o/question/2',
      buttonText: '保持狀態！迎接下一個挑戰'
    }
  },
  {
    path: 'o2o/question/1-1',
    component: ScenarioComponent,
    data:
    {
      path: '../assets/gif/對話_O2O-1-1-2無aiii.gif',
      nextPage: '/o2o/question/2',
      buttonText: '再接再厲！迎接下⼀個挑戰'
    }
  },
  {
    path: 'o2o/question/2',
    component: TextQuestionComponent,
    data:
    {
      buttonsText: ['用LINE辦抽獎，中獎結果即時通知', '我們會請客服專員與中獎者直接聯繫'],
      questionText: '參加官網跟門市抽獎，公告得獎名單那麼長？我哪有美國時間慢慢查！',
      imagePath: '../assets/image/chat bot/meet taipei chatbot_1-2.png',
      nextPage: ['/o2o/question/1-2/aiii', '/o2o/question/1-2']
    }
  },
  {
    path: 'o2o/question/1-2/aiii',
    component: ScenarioComponent,
    data:
    {
      path: '../assets/gif/對話_O2O-1-2-1有aiii.gif',
      nextPage: '/o2o/question/3',
      buttonText: '保持狀態！迎接下⼀個挑戰'
    }
  },
  {
    path: 'o2o/question/1-2',
    component: ScenarioComponent,
    data:
    {
      path: '../assets/gif/對話_O2O-1-2-2無aiii.gif',
      nextPage: '/o2o/question/3',
      buttonText: '再接再厲！迎接下⼀個挑戰'
    }
  },
  {
    path: 'o2o/question/3',
    component: QuestionComponent,
    data:
    {
      buttonsText: ['報告老闆，LINE後台不支援此分析', '沒問題！（還好合作廠商有支援）'],
      imagePath: '../assets/gif/對話_O2O-1-3_(4s).gif',
      nextPage: ['/o2o/question/1-3/aiii', '/o2o/question/1-3']
    }
  },
  {
    path: 'o2o/question/1-3/aiii',
    component: ScenarioComponent,
    data:
    {
      path: '../assets/gif/對話_O2O-1-3-1有aiii.gif',
      nextPage: '/o2o/question/4',
      buttonText: '保持狀態！迎接下⼀個挑戰'
    }
  },
  {
    path: 'o2o/question/1-3',
    component: ScenarioComponent,
    data:
    {
      path: '../assets/gif/對話_O2O-1-3-2無aiii.gif',
      nextPage: '/o2o/question/4',
      buttonText: '再接再厲！迎接下⼀個挑戰'
    }
  },
  {
    path: 'o2o/question/4',
    component: TextQuestionComponent,
    data:
    {
      buttonsText: ['好的！交給LINE自動通知', '哎...活動前又要一一電話通知'],
      questionText: '我已經升級成「鑽石VIP」符合講座參與資格，但已經額滿了，請問有人取消可以第一時間通知我嗎？',
      imagePath: '../assets/image/chat bot/meet taipei chatbot_1-4.png',
      nextPage: ['/o2o/question/1-4/aiii', '/o2o/question/1-4']
    }
  },
  {
    path: 'o2o/question/1-4/aiii',
    component: ScenarioComponent,
    data:
    {
      path: '../assets/gif/對話_O2O-1-4-1有aiii.gif',
      nextPage: '/o2o/final',
      buttonText: '話不多說，立馬查看挑戰結果'
    }
  },
  {
    path: 'o2o/question/1-4',
    component: ScenarioComponent,
    data:
    {
      path: '../assets/gif/對話_O2O-1-4-2無aiii.gif',
      nextPage: '/o2o/final',
      buttonText: '振作不氣餒，來去看挑戰結果'
    }
  },
  {
    path: 'o2o/final',
    component: FinalPageComponent,
    data:
    {
      slickImagePaths: [
        '../assets/image/3-star/CMR整合.png',
        '../assets/image/3-star/渠道分析.png',
        '../assets/image/3-star/抽獎管理.png',
        '../assets/image/3-star/活動管理.png',
      ],
      buttonText: '取得消費者輪廓分析',
      imagePath: '../assets/image/chat bot/final-page-people.png',
      starNumber: 3,
      result: '立即取得O2O消費者輪廓分析！'
    }
  }
];

const ecommerceRoute = [
  {
    path: 'e-commerce',
    component: ScenarioComponent,
    data:
    {
      liffId: '1565999579-n7084Pmp',
      path: '../assets/gif/對話_電商-開頭.gif',
      nextPage: 'question/1',
      buttonText: '已了解情境背景，立即挑戰實作！'
    }
  },
  {
    path: 'e-commerce/question/1',
    component: TextQuestionComponent,
    data:
    {
      buttonsText:
      [
        '既有會員從EDM加入LINE官⽅帳號就會有100元折價券喔！',
        '非會員從廣告加入LINE官⽅帳號沒有其他優惠喔！'
      ],
      questionText: '加入LINE官⽅帳號會獲得什麼優惠嗎？',
      imagePath: '../assets/image/chat bot/meet taipei chatbot_2-1.png',
      nextPage: ['/e-commerce/2-1/aiii', '/e-commerce/2-1']
    }
  },
  {
    path: 'e-commerce/2-1/aiii',
    component: ScenarioComponent,
    data:
    {
      path: '../assets/gif/對話_電商-2-1-1有aiii.gif',
      nextPage: ['/e-commerce/question/2'],
      buttonText: '保持狀態！迎接下一個挑戰'
    }
  },
  {
    path: 'e-commerce/2-1',
    component: ScenarioComponent,
    data:
    {
      path: '../assets/gif/對話_電商-2-1-2無aiii.gif',
      nextPage: ['/e-commerce/question/2'],
      buttonText: '再接再厲！迎接下一個挑戰'
    }
  },
  {
    path: 'e-commerce/question/2',
    component: TextQuestionComponent,
    data:
    {
      buttonsText:
      [
        '好的，我們會降低推播訊息頻率。',
        '針對會員喜好，改善推播內容，並依據您的愛好推播訊息。'
      ],
      questionText: '最近收到好多推播訊息，但是很多不是我感興趣的內容...',
      imagePath: '../assets/image/chat bot/meet taipei chatbot_2-2.png',
      nextPage: ['/e-commerce/2-2', '/e-commerce/2-2/aiii']
    }
  },
  {
    path: 'e-commerce/2-2/aiii',
    component: ScenarioComponent,
    data:
    {
      path: '../assets/gif/對話_電商-2-2-1有aiii.gif',
      nextPage: ['/e-commerce/question/3'],
      buttonText: '保持狀態！迎接下一個挑戰'
    }
  },
  {
    path: 'e-commerce/2-2',
    component: ScenarioComponent,
    data:
    {
      path: '../assets/gif/對話_電商-2-2-2無aiii.gif',
      nextPage: ['/e-commerce/question/3'],
      buttonText: '再接再厲！迎接下一個挑戰'
    }
  },
  {
    path: 'e-commerce/question/3',
    component: TextQuestionComponent,
    data:
    {
      buttonsText:
      [
        '在LINE上綁定官網會員，就可以在輕鬆查看官網會員/訂單資料！',
        '我們將優化網站載入速度，並加上FB登入方式，方便查看'
      ],
      questionText: '每次查看消費記錄、紅利點數，都要登入會員好麻煩！網⾴載入也花時間',
      imagePath: '../assets/image/chat bot/meet taipei chatbot_2-3.png',
      nextPage: ['/e-commerce/2-3/aiii', '/e-commerce/2-3']
    }
  },
  {
    path: 'e-commerce/2-3/aiii',
    component: ScenarioComponent,
    data:
    {
      path: '../assets/gif/對話_電商-2-3-1有aiii.gif',
      nextPage: ['/e-commerce/question/4'],
      buttonText: '保持狀態！迎接下一個挑戰'
    }
  },
  {
    path: 'e-commerce/2-3',
    component: ScenarioComponent,
    data:
    {
      path: '../assets/gif/對話_電商-2-3-2無aiii.gif',
      nextPage: ['/e-commerce/question/4'],
      buttonText: '再接再厲！迎接下一個挑戰'
    }
  },
  {
    path: 'e-commerce/question/4',
    component: QuestionComponent,
    data:
    {
      buttonsText:
      [
        '好的，依照使用者購物車內的商品通投再行銷廣告～',
        '沒問題！依照使用者近期瀏覽行為推薦更感興趣商品，促進消費～'
      ],
      imagePath: '../assets/gif/對話_電商-2-4_(4s).gif',
      nextPage: ['/e-commerce/question/1-4', '/e-commerce/question/1-4/aiii']
    }
  },
  {
    path: 'e-commerce/question/1-4/aiii',
    component: ChallengeResultComponent,
    data:
    {
      rawText: '依據不同行為喜好做個人化推播，果然有效提升消費者購買轉換率！',
      buttonText: '勢在必行！立即查看挑戰結果',
      imagePath: '../assets/image/chat bot/meet taipei chatbot_2-4-1.png',
    }
  },
  {
    path: 'e-commerce/question/1-4',
    component: ChallengeResultComponent,
    data:
    {
      rawText: '不依消費者喜好，直接通投全館折扣的廣告，購物車的流失率一點都沒降低...對於品牌的信任也更下降了！',
      buttonText: '打起精神，查看挑戰結果',
      imagePath: '../assets/image/chat bot/meet taipei chatbot_2-4-2.png',
    }
  },
  {
    path: 'e-commerce/final/three',
    component: FinalPageComponent,
    data:
    {
      slickImagePaths: [
        '../assets/image/5-star/CMR整合.png',
        '../assets/image/5-star/渠道分析.png',
        '../assets/image/5-star/動態標籤.png',
        '../assets/image/5-star/客戶分級.png',
      ],
      buttonText: '取得消費者輪廓',
      imagePath: '../assets/image/chat bot/final-page-people.png',
      starNumber: 3,
      result: '立即取得～消費者輪廓分析資料'
    }
  },
  {
    path: 'e-commerce/final/five',
    component: FinalPageComponent,
    data:
    {
      slickImagePaths: [
        '../assets/image/5-star/CMR整合.png',
        '../assets/image/5-star/渠道分析.png',
        '../assets/image/5-star/動態標籤.png',
        '../assets/image/5-star/客戶分級.png',
      ],
      buttonText: '取得消費者輪廓',
      imagePath: '../assets/image/chat bot/final-page-people.png',
      starNumber: 5,
      result: '立即取得消費者輪廓分析！'
    }
  }
];

const routes: Routes = [
  ...o2oRoute,
  ...ecommerceRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
