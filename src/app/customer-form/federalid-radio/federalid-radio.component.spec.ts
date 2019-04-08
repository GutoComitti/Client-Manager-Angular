import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FederalidRadioComponent } from './federalid-radio.component';

describe('FederalidRadioComponent', () => {
  let component: FederalidRadioComponent;
  let fixture: ComponentFixture<FederalidRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FederalidRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FederalidRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
