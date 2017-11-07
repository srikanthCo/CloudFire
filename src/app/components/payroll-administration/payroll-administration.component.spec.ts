import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollAdministrationComponent } from './payroll-administration.component';

describe('PayrollAdministrationComponent', () => {
  let component: PayrollAdministrationComponent;
  let fixture: ComponentFixture<PayrollAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
