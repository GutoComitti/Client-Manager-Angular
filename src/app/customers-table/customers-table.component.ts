import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { CustomersTableDataSource } from './customers-table-datasource';
import { Router } from '@angular/router';

import { CustomersService } from '../shared/services/customers.service';

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.css']
})
export class CustomersTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: CustomersTableDataSource;

  constructor(private customersService: CustomersService, private router: Router) { }

  ngOnInit() {
    this.dataSource = new CustomersTableDataSource(this.paginator, this.sort, this.customersService);
    this.onListCustomers();
  }

  onDeleteCustomer(id: number){
    this.customersService.deleteCustomer(id)
    .subscribe(() => {
      //Workaround pra fazer o reload dos dados
    this.router.navigateByUrl('/a').then(
      () => {
        this.router.navigateByUrl('/list');
      });
    },
    (error) => {
      console.log(error);
        alert("Ocorreu um erro ao tentar deletar o cliente :(");
        //TODO: Tratar o erro de forma melhor      
    });
  }


  onListCustomers() {
    this.customersService.getCustomers()
    .subscribe((response) => {
      this.dataSource.data = response.data.customerList;
    },
    (error) => {
      console.log(error);
        alert("Ocorreu um erro ao buscar os dados do servidor :(");
        //TODO: Tratar o erro de forma melhor
    });
  }

  displayedColumns = ['name',
                      'federalId',
                      'email',
                      'phone',
                      'residentialAddress',
                      'active',
                      'editIcon',
                      'deleteIcon'
                      ];

}
