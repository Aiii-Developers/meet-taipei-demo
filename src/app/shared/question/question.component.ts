import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnswerService } from '../answer.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnDestroy {
  backgroundPath: string;
  buttonsText: [string, string];
  isButtonVisible: boolean;
  nextPage: [string, string];
  private sub: any;
  constructor(private route: ActivatedRoute, private answerService: AnswerService) { }

  ngOnInit() {
    this.isButtonVisible = false;
    this.sub = this.route
      .data
      .subscribe(data => {
        this.backgroundPath = data.imagePath;
        this.buttonsText = data.buttonsText;
        this.nextPage = data.nextPage;
      });

    setTimeout(() => {
      this.isButtonVisible = true;
    }, 5000);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  select(selection: string) {
    this.answerService.pushAnswer(selection);
    this.answerService.logAnswer();
  }

}
