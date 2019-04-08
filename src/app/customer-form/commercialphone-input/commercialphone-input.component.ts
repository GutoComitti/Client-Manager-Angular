import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-commercialphone-input',
  templateUrl: './commercialphone-input.component.html',
  styleUrls: ['../fields-shared.css']
})
export class CommercialphoneInputComponent implements OnInit {

  commercialPhone: AbstractControl;
  @Input() parentForm: FormGroup;
  @Input() commercialPhoneVal: string;

  constructor() { }

  ngOnInit() {
    this.commercialPhone = new FormControl('');
    this.parentForm.addControl('commercialPhone', this.commercialPhone);
  }

}
