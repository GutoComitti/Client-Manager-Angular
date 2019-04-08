import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailcollectionInputComponent } from './emailcollection-input.component';

describe('EmailcollectionInputComponent', () => {
  let component: EmailcollectionInputComponent;
  let fixture: ComponentFixture<EmailcollectionInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailcollectionInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailcollectionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
