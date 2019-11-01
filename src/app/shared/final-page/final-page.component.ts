import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LiffService } from '../../liff/liff.service';
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
  constructor(private route: ActivatedRoute, private liffService: LiffService) { }

  async ngOnInit() {
    const profile = await this.liffService.getProfile();
    this.userName = profile.displayName;
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

  closeLiffWindow() {
    this.liffService.closeWindow();
  }

}
