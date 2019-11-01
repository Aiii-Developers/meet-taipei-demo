import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-challenge-result',
  templateUrl: './challenge-result.component.html',
  styleUrls: ['./challenge-result.component.scss']
})
export class ChallengeResultComponent implements OnInit, OnDestroy {
  rawText: string;
  buttonText: string;
  imagePath: string;
  isButtonVisible: boolean;
  private sub: any;

  constructor(private route: ActivatedRoute, private answerService: AnswerService) { }

  ngOnInit() {
    this.isButtonVisible = false;
    this.sub = this.route
      .data
      .subscribe(data => {
        this.rawText = data.rawText;
        this.buttonText = data.buttonText;
        this.imagePath = data.imagePath;
      });

    setTimeout(() => {
      this.isButtonVisible = true;
    }, 5000);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getFinalPagePath(): string {
    return this.answerService.getResult();
  }

}
