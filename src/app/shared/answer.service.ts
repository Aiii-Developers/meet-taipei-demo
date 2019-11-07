import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private answers: Array<string>;
  constructor() {
    this.answers = [];
  }

  public pushAnswer(answer: string) {
    this.answers.push(answer);
  }

  public getResult(): string {
    const fiveStar =  this.answers[0] === 'a' && this.answers[1] === 'b' && this.answers[3] === 'b';
    return fiveStar ? '/e-commerce/final/five' : '/e-commerce/final/three';
  }

  public logAnswer() {
    console.log(this.answers);
  }
}
