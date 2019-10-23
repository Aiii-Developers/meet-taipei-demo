import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  backgroundPath: string;
  buttonsText: [string, string];
  isButtonVisible: boolean;
  private sub: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.isButtonVisible = false;
    this.sub = this.route
      .data
      .subscribe(data => {
        this.backgroundPath = data.imagePath;
        this.buttonsText = data.buttonsText;
      });

    setTimeout(() => {
      this.isButtonVisible = true;
    }, 5000);
  }

  ngonDestroy() {
    this.sub.unsubscribe();
  }

}
