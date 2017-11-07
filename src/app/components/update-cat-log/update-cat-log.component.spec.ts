import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCatLogComponent } from './update-cat-log.component';

describe('UpdateCatLogComponent', () => {
  let component: UpdateCatLogComponent;
  let fixture: ComponentFixture<UpdateCatLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCatLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCatLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
