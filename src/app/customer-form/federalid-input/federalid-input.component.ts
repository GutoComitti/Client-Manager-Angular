import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-federalid-input',
  templateUrl: './federalid-input.component.html',
  styleUrls: ['../fields-shared.css']
})
export class FederalidInputComponent implements OnInit {

  federalId: AbstractControl;
  @Input() parentForm: FormGroup;
  @Input() federalIdVal: string;

  constructor() { }

  ngOnInit() {
    this.federalId = new FormControl('', [Validators.required]);
    this.parentForm.addControl('federalId', this.federalId);
  }

}
