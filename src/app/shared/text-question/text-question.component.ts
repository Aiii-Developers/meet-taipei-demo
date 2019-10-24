import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  private sub: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.isButtonVisible = false;
    this.sub = this.route
      .data
      .subscribe(data => {
        this.questionText = data.questionText;
        this.buttonsText = data.buttonsText;
        this.imagePath = data.imagePath;
      });

    setTimeout(() => {
      this.isButtonVisible = true;
    }, 3000);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
