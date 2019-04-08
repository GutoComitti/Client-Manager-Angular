import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-active-radio',
  templateUrl: './active-radio.component.html',
  styleUrls: ['../fields-shared.css',
  						'./active-radio.component.css']
})
export class ActiveRadioComponent implements OnInit {
  active: AbstractControl;
  @Input() activeVal: boolean;
  @Input() parentForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.active = new FormControl('');
    this.parentForm.addControl('active', this.active);
  }
}