import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialphoneInputComponent } from './commercialphone-input.component';

describe('CommercialphoneInputComponent', () => {
  let component: CommercialphoneInputComponent;
  let fixture: ComponentFixture<CommercialphoneInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialphoneInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialphoneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
