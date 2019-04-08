import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';
import { MatTableModule, MatSortModule, MatIconModule, MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppFormsModule } from './app-forms.module';
import { AppComponent } from './app.component';
import { CustomersService } from './shared/services/customers.service';
import { CustomersTableComponent } from './customers-table/customers-table.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomersTableComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatPaginatorModule,
    AppRoutingModule,
    AppFormsModule,
  ],
  providers: [CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
