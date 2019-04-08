import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FederalidInputComponent } from './federalid-input.component';

describe('FederalidInputComponent', () => {
  let component: FederalidInputComponent;
  let fixture: ComponentFixture<FederalidInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FederalidInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FederalidInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
