import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-residentialphone-input',
  templateUrl: './residentialphone-input.component.html',
  styleUrls: ['../fields-shared.css']
})
export class ResidentialphoneInputComponent implements OnInit {

  residentialPhone: AbstractControl;
  @Input() parentForm: FormGroup;
  @Input() residentialPhoneVal: string;

  constructor() { }

  ngOnInit() {
    this.residentialPhone = new FormControl('');
    this.parentForm.addControl('residentialPhone', this.residentialPhone);
  }
}
