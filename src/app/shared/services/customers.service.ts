import { Injectable } from '@angular/core';
import 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Customer } from '../models/customer.model';

@Injectable()
export class CustomersService {

  constructor(private http: HttpClient) {}
//Enviar Customer JSON com id null
  addCustomer(customer: Customer) {
    return this.http.post<Customer>('http://test.portalpostal.com.br:8083/secure/customer/', customer);
  }

  getCustomers(){
    return this.http.get<any>('http://test.portalpostal.com.br:8083/secure/customers/');
  }

  getCustomer(id: number){
    return this.http.get<any>('http://test.portalpostal.com.br:8083/secure/customer/'+id);
  }

  updateCustomer(customer: Customer){
    return this.http.put<Customer>('http://test.portalpostal.com.br:8083/secure/customer/', customer);
  }

  deleteCustomer(id: number){
    return this.http.delete<Customer>('http://test.portalpostal.com.br:8083/secure/customer/'+id);
  }

}