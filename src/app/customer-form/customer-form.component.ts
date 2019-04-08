import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { CustomersService } from '../shared/services/customers.service';
import { Customer } from '../shared/models/customer.model';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
	isEdit: boolean;
	id: number;
  isCustomerReady: boolean = false;
	clientForm: FormGroup;
  customer: Customer;
  constructor(private route: ActivatedRoute, private router: Router, private customersService: CustomersService) { }

  
  onSubmit(){
    let newCustumer = {
      id: this.isEdit ? this.id : null,
      name: this.clientForm.value.name,
      federalId: this.clientForm.value.federalId,
      rg: this.clientForm.value.registration ? this.clientForm.value.registration : null,
      phone: this.clientForm.value.phone,
      phone2: this.clientForm.value.phone2 ? this.clientForm.value.phone2 : null,
      email: this.clientForm.value.email,
      emailCollection: this.clientForm.value.emailCollection,
      residentialPhone: this.clientForm.value.residentialPhone ? this.clientForm.value.residentialPhone : null,
      commercialPhone: this.clientForm.value.commercialPhone ? this.clientForm.value.commercialPhone : null,
      emergencyContact: null,
      emergencyPhone: null,
      federalIdType: this.clientForm.value.federalIdRadio == 'f' ? 'Physical' : 'Juridical',
      commercialAddress: null,
      residentialAddress: null,
      active: this.clientForm.value.active ? true : false,
      birthday: null,
      gender: this.clientForm.value.gender
    };
    if (this.isEdit){
      this.customersService.updateCustomer(newCustumer)
      .subscribe((response) => {
        this.router.navigate(['/list']);
      },
      (error) => {
        console.log(error);
        alert("Ocorreu um erro ao enviar os dados ao servidor :(");
        //TODO: Tratar o erro de forma melhor
      });
    }else{
      this.customersService.addCustomer(newCustumer)
      .subscribe((response) => {
        this.router.navigate(['/list']);
      },
      (error) => {
        console.log(error);
        alert("Ocorreu um erro ao enviar os dados ao servidor :(");
        //TODO: Tratar o erro de forma melhor
      });
    }
  }

  fetchCustomer(id: number){
    this.customersService.getCustomer(id)
    .subscribe((response) => {
      this.customer = response.data.customer;
      this.isCustomerReady = true;
    },
    (error) => {
      console.log(error);
        alert("Ocorreu um erro ao buscar os dados do servidor :(");
        //TODO: Tratar o erro de forma melhor
    });
  }


  ngOnInit() {
    this.clientForm = new FormGroup({});

  	this.id = this.route.snapshot.params['id'];
  	this.isEdit = this.id ? true : false;
    if (this.id){
      this.fetchCustomer(this.id);
    }else{
      this.customer = {
    name: null,
    federalId: null,
    phone: null,
    active: null,
    email: null,
    emailCollection: null,
    rg: null,
    phone2: null,
    id: null,
    residentialPhone: null,
    commercialPhone: null,
    federalIdType: null,
    gender: null
      }
      this.isCustomerReady = true;
    }
  }

  onCancel(){
    this.router.navigate(['/list']);
  }
}