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
    console.log('init liff');
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
    console.log('log in');

    try {
      if (!this.liff.isLoggedIn()) {
        this.liff.login();
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getProfile(): Promise<LIFFUserProfile | null> {
    console.log('get liff profile');
    try {
      return await this.liff.getProfile();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

}
