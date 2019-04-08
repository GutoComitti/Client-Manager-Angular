import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Phone2InputComponent } from './phone2-input.component';

describe('Phone2InputComponent', () => {
  let component: Phone2InputComponent;
  let fixture: ComponentFixture<Phone2InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Phone2InputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Phone2InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
