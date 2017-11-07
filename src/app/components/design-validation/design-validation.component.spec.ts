import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignValidationComponent } from './design-validation.component';

describe('DesignValidationComponent', () => {
  let component: DesignValidationComponent;
  let fixture: ComponentFixture<DesignValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
