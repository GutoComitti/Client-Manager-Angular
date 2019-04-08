import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomersTableComponent } from './customers-table/customers-table.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

const routes: Routes =[
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list', component: CustomersTableComponent, pathMatch: 'full' },
  { path: 'add', component: CustomerFormComponent, pathMatch: 'full' },
  { path: 'edit/:id', component: CustomerFormComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}