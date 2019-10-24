import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) { }

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

}
