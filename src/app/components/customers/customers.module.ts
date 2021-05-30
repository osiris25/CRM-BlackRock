import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { ListPostRoutingModule } from './list-post-routing.module';
//import { ListPostComponent } from './list-post.component';
//import { MaterialModule } from '../../../material.module';
//import { DataTableComponent } from '../../../shared/components/data-table/data-table.component';
import { TableCustumersComponent } from '../../shared/table-custumers/table-custumers.component';
import { CustomersComponent } from './customers.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    CustomersComponent,
    TableCustumersComponent
  ],
  imports: [
    CommonModule,
    //ListPostRoutingModule,
    MaterialModule  
  ],
  exports: [
      CustomersComponent,
      TableCustumersComponent
  ],
  
})
export class CustumersModule { }
