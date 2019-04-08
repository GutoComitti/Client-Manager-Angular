import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-emailcollection-input',
  templateUrl: './emailcollection-input.component.html',
  styleUrls: ['../fields-shared.css']
})
export class EmailcollectionInputComponent implements OnInit {

  emailCollection: AbstractControl;
  @Input() parentForm: FormGroup;
  @Input() emailCollectionVal: string;

  constructor() { }

  ngOnInit() {
    this.emailCollection = new FormControl('', [Validators.required, Validators.email]);
    this.parentForm.addControl('emailCollection', this.emailCollection);
  }

}
