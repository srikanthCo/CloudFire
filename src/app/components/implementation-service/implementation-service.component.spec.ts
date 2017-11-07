import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementationServiceComponent } from './implementation-service.component';

describe('ImplementationServiceComponent', () => {
  let component: ImplementationServiceComponent;
  let fixture: ComponentFixture<ImplementationServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplementationServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
