import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDevelopmentComponent } from './product-development.component';

describe('ProductDevelopmentComponent', () => {
  let component: ProductDevelopmentComponent;
  let fixture: ComponentFixture<ProductDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
