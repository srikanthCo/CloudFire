import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalDocumentationComponent } from './technical-documentation.component';

describe('TechnicalDocumentationComponent', () => {
  let component: TechnicalDocumentationComponent;
  let fixture: ComponentFixture<TechnicalDocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalDocumentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
