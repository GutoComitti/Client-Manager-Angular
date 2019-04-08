import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-federalid-radio',
  templateUrl: './federalid-radio.component.html',
  styleUrls: ['../fields-shared.css']
})
export class FederalidRadioComponent implements OnInit {

  federalIdRadio: AbstractControl;
  @Input() parentForm: FormGroup;
  @Input() federalIdVal: string;

  constructor() { }

  ngOnInit() {
    this.federalIdRadio = new FormControl('', [Validators.required]);
    this.parentForm.addControl('federalIdRadio', this.federalIdRadio);
  }

}
