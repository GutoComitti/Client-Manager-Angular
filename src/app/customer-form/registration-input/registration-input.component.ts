import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-registration-input',
  templateUrl: './registration-input.component.html',
  styleUrls: ['../fields-shared.css']
})
export class RegistrationInputComponent implements OnInit {

  registration: AbstractControl;
  @Input() parentForm: FormGroup;
  @Input() registrationVal: string;

  constructor() { }

  ngOnInit() {
    this.registration = new FormControl('');
    this.parentForm.addControl('registration', this.registration);
  }
}
