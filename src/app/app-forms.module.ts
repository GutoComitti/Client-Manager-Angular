import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CustomerFormComponent } from './customer-form/customer-form.component';
import { EmailInputComponent } from './customer-form/email-input/email-input.component';
import { NameInputComponent } from './customer-form/name-input/name-input.component';
import { FederalidInputComponent } from './customer-form/federalid-input/federalid-input.component';
import { RegistrationInputComponent } from './customer-form/registration-input/registration-input.component';
import { ActiveRadioComponent } from './customer-form/active-radio/active-radio.component';
import { GenderRadioComponent } from './customer-form/gender-radio/gender-radio.component';
import { FederalidRadioComponent } from './customer-form/federalid-radio/federalid-radio.component';
import { PhoneInputComponent } from './customer-form/phone-input/phone-input.component';
import { Phone2InputComponent } from './customer-form/phone2-input/phone2-input.component';
import { EmailcollectionInputComponent } from './customer-form/emailcollection-input/emailcollection-input.component';
import { ResidentialphoneInputComponent } from './customer-form/residentialphone-input/residentialphone-input.component';
import { CommercialphoneInputComponent } from './customer-form/commercialphone-input/commercialphone-input.component';


@NgModule({
	declarations:[
		CustomerFormComponent,
		EmailInputComponent,
		NameInputComponent,
		FederalidInputComponent,
		RegistrationInputComponent,
		ActiveRadioComponent,
		GenderRadioComponent,
		FederalidRadioComponent,
		PhoneInputComponent,
		Phone2InputComponent,
		EmailcollectionInputComponent,
		ResidentialphoneInputComponent,
		CommercialphoneInputComponent
	],
  imports: [
  	BrowserModule,
  	ReactiveFormsModule,
  ],
  exports: [ReactiveFormsModule]
})

export class AppFormsModule {

}