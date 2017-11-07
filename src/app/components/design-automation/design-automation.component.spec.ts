import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignAutomationComponent } from './design-automation.component';

describe('DesignAutomationComponent', () => {
  let component: DesignAutomationComponent;
  let fixture: ComponentFixture<DesignAutomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignAutomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
