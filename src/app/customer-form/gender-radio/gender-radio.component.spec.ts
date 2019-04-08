import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderRadioComponent } from './gender-radio.component';

describe('GenderRadioComponent', () => {
  let component: GenderRadioComponent;
  let fixture: ComponentFixture<GenderRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenderRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
