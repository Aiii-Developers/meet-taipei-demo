import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-final-page',
  templateUrl: './final-page.component.html',
  styleUrls: ['./final-page.component.scss']
})
export class FinalPageComponent implements OnInit, OnDestroy {
  slickImagePaths: [string];
  buttonText: string;
  imagePath: string;
  userName: string;
  starNumber: number;
  private sub: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // TODO(jamfly): need to be dynamic
    this.userName = 'jamfly';
    this.sub = this.route
      .data
      .subscribe(data => {
        this.slickImagePaths = data.slickImagePaths;
        this.buttonText = data.buttonText;
        this.imagePath = data.imagePath;
        this.starNumber = data.starNumber;
      });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
