import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['../fields-shared.css']
})
export class NameInputComponent implements OnInit {

  name: AbstractControl;
  @Input() parentForm: FormGroup;
  @Input() nameVal: string;

  constructor() { }

  ngOnInit() {
    this.name = new FormControl('', [Validators.required]);
    this.parentForm.addControl('name', this.name);
  }

}
