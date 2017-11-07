import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermenantRecruitmentComponent } from './permenant-recruitment.component';

describe('PermenantRecruitmentComponent', () => {
  let component: PermenantRecruitmentComponent;
  let fixture: ComponentFixture<PermenantRecruitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermenantRecruitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermenantRecruitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
