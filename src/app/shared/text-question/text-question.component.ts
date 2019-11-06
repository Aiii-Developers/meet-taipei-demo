import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-text-question',
  templateUrl: './text-question.component.html',
  styleUrls: ['./text-question.component.scss']
})
export class TextQuestionComponent implements OnInit, OnDestroy {

  questionText: string;
  buttonsText: [string, string];
  imagePath: string;
  isButtonVisible: boolean;
  nextPage: [string, string];
  private sub: any;
  constructor(private route: ActivatedRoute, private answerService: AnswerService) { }

  ngOnInit() {
    this.isButtonVisible = false;
    this.sub = this.route
      .data
      .subscribe(data => {
        this.questionText = data.questionText;
        this.buttonsText = data.buttonsText;
        this.imagePath = data.imagePath;
        this.nextPage = data.nextPage;
      });

    setTimeout(() => {
      this.isButtonVisible = true;
    }, 2000);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  select(selection: string) {
    this.answerService.pushAnswer(selection);
    this.answerService.logAnswer();
  }


}
