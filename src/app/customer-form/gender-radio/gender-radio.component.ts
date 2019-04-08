import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-gender-radio',
  templateUrl: './gender-radio.component.html',
  styleUrls: ['../fields-shared.css']
})
export class GenderRadioComponent implements OnInit {

  gender: AbstractControl;
  @Input() parentForm: FormGroup;
  @Input() genderVal: string;

  constructor() { }

  ngOnInit() {
    this.gender = new FormControl('', [Validators.required]);
    this.parentForm.addControl('gender', this.gender);
  }

}
