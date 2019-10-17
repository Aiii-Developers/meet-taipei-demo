import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.scss']
})
export class ScenarioComponent implements OnInit, OnDestroy {

  backgroundPath: string;
  isButtonVisible: boolean;
  private sub: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.isButtonVisible = false;
    this.sub = this.route
      .data
      .subscribe(data => {
        this.backgroundPath = data.path;
        console.log(JSON.stringify(data));
      });

    setTimeout(() => {
      this.isButtonVisible = true;
    }, 6000);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}

