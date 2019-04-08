import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['../fields-shared.css']
})
export class PhoneInputComponent implements OnInit {

  phone: AbstractControl;
  @Input() parentForm: FormGroup;
  @Input() phoneVal: string;

  constructor() { }

  ngOnInit() {
    this.phone = new FormControl('', [Validators.required]);
    this.parentForm.addControl('phone', this.phone);
  }
}
