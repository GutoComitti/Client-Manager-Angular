import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['../fields-shared.css']
})
export class EmailInputComponent implements OnInit {

  email: AbstractControl;
  @Input() parentForm: FormGroup;
  @Input() emailVal: string;

  constructor() { }

  ngOnInit() {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.parentForm.addControl('email', this.email);
  }

}
