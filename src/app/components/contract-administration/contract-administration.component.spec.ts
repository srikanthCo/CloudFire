import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractAdministrationComponent } from './contract-administration.component';

describe('ContractAdministrationComponent', () => {
  let component: ContractAdministrationComponent;
  let fixture: ComponentFixture<ContractAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
