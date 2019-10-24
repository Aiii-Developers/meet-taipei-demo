import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeResultComponent } from './challenge-result.component';

describe('ChallengeResultComponent', () => {
  let component: ChallengeResultComponent;
  let fixture: ComponentFixture<ChallengeResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
