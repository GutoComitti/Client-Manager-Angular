import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveRadioComponent } from './active-radio.component';

describe('ActiveRadioComponent', () => {
  let component: ActiveRadioComponent;
  let fixture: ComponentFixture<ActiveRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
