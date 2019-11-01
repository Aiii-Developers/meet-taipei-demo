import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LiffService } from '../../liff/liff.service';

@Component({
  selector: 'app-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.scss']
})
export class ScenarioComponent implements OnInit, OnDestroy {

  backgroundPath: string;
  nextPagePath: string;
  isButtonVisible: boolean;
  liffId: string;
  buttonText: string;
  private sub: any;
  constructor(private route: ActivatedRoute, private liffService: LiffService) {}

  ngOnInit(): void {
    this.isButtonVisible = false;
    this.sub = this.route
      .data
      .subscribe(data => {
        this.backgroundPath = data.path;
        this.liffId = data.liffId;
        this.nextPagePath = data.nextPage;
        this.buttonText = data.buttonText;
      });

    setTimeout(() => {
      this.isButtonVisible = true;
    }, 6000);

    this.liffService.initLiff(this.liffId);
    this.liffService.login();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}

