import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialphoneInputComponent } from './residentialphone-input.component';

describe('ResidentialphoneInputComponent', () => {
  let component: ResidentialphoneInputComponent;
  let fixture: ComponentFixture<ResidentialphoneInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentialphoneInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentialphoneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
