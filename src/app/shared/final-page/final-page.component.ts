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
  result: string;
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
        this.result = data.result;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private closeLiffWindow(): void {
    this.liffService.closeWindow();
  }

  private async sendMessage(message: string): Promise<void> {
    try {
      await this.liffService.sendMessages([{
        type: 'text',
        text: message
      }]);
    } catch (error) {
      alert(error.message);
    }

  }

  async finishChallenge(): Promise<void> {
    await this.sendMessage(this.result);
    this.closeLiffWindow();
  }

}
