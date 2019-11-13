import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LiffService } from '../../liff/liff.service';
import { AngularFirestore } from 'angularfire2/firestore';
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
  type: string;
  private sub: any;
  private profile: LineUserProfile;
  constructor(private route: ActivatedRoute, private liffService: LiffService, private db: AngularFirestore) { }

  async ngOnInit() {
    this.profile = await this.liffService.getProfile();
    if (this.liffService.isDevMode()) {
      this.userName = 'jamfly';
    } else {
      this.userName = this.profile.displayName;
    }
    this.sub = this.route
      .data
      .subscribe(data => {
        this.slickImagePaths = data.slickImagePaths;
        this.buttonText = data.buttonText;
        this.imagePath = data.imagePath;
        this.starNumber = data.starNumber;
        this.result = data.result;
        this.type = data.type;
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

  private async trackUser(): Promise<void> {
    const doc = this.db.collection('/finish').doc(this.profile.userId);
    await doc.set({
      userName: this.profile.displayName,
      type: this.type,
      userId: this.profile.userId,
      createdAt: new Date(),
    },
    { merge: true });
  }

  async finishChallenge(): Promise<void> {
    await this.sendMessage(this.result);
    await this.trackUser();
    this.closeLiffWindow();
  }

}
