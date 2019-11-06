import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LiffService {

  private isInit: boolean;
  private liff: LIFF = liff;
  constructor() {
    this.isInit = false;
  }

  async initLiff(liffId: string) {
    try {
      if (!this.isInit) {
        await this.liff.init({ liffId });
        this.isInit = true;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async login() {
    try {
      if (!this.liff.isLoggedIn()) {
        this.liff.login();
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getProfile(): Promise<LIFFUserProfile | null> {
    try {
      return await this.liff.getProfile();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async sendMessages(messages: Array<LIFFTextMessage |
                                    LIFFImageMessage |
                                    LIFFVideoMessage |
                                    LIFFAudioMessage |
                                    LIFFLocationMessage>):
  Promise<void> {
    await this.liff.sendMessages(messages);
  }

  closeWindow() {
    this.liff.closeWindow();
  }

}
