import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LiffService } from '../../liff/liff.service';
import { AngularFirestore } from 'angularfire2/firestore';
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
  isStart: boolean;
  type: string;
  private sub: any;
  constructor(private route: ActivatedRoute, private liffService: LiffService, private db: AngularFirestore) {}

  async ngOnInit(): Promise<void> {
    this.isButtonVisible = false;
    this.sub = this.route
      .data
      .subscribe(data => {
        this.backgroundPath = data.path;
        this.liffId = data.liffId;
        this.nextPagePath = data.nextPage;
        this.buttonText = data.buttonText;
        this.isStart = data.isStart;
        this.type = data.type;
      });

    setTimeout(() => {
      this.isButtonVisible = true;
    }, 6000);

    this.liffService.initLiff(this.liffId);
    this.liffService.login();
    await this.trackUser();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private async trackUser(): Promise<void> {
    const profile = await this.liffService.getProfile();
    const doc = this.db.collection('/start').doc(profile.userId);
    await doc.set({
      userName: profile.displayName,
      type: this.type,
      userId: profile.userId,
      createdAt: new Date(),
    },
    { merge: true });
  }

}

