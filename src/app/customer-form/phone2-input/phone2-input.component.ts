import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-phone2-input',
  templateUrl: './phone2-input.component.html',
  styleUrls: ['../fields-shared.css']
})
export class Phone2InputComponent implements OnInit {

  phone2: AbstractControl;
  @Input() parentForm: FormGroup;
  @Input() phone2Val: string;

  constructor() { }

  ngOnInit() {
    this.phone2 = new FormControl('');
    this.parentForm.addControl('phone2', this.phone2);
  }
}
