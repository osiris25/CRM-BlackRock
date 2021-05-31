import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableCustumersComponent } from '../../shared/table-custumers/table-custumers.component';
import { CustomersComponent } from './customers.component';
import { MaterialModule } from 'src/app/material/material.module';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CustomersComponent,
    TableCustumersComponent,
    EditCustomerComponent,
    CreateCustomerComponent,
  ],
  imports: [
    CommonModule,
    //ListPostRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    CustomersComponent,
    TableCustumersComponent,
    EditCustomerComponent,
    CreateCustomerComponent,
  ],
})
export class CustomersModule {}
