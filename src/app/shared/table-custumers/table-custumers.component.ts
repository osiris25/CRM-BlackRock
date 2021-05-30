import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {CustomersService} from '../../components/customers/customerService/customers.service';
import Customer from '../../components/customers/customers.model';
import { map } from 'rxjs/internal/operators';
import { MatTableDataSource } from '@angular/material/table';

/* export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
} */

let ELEMENT_DATA: Customer[] = [
  
];


@Component({
  selector: 'app-table-custumers',
  templateUrl: './table-custumers.component.html',
  styleUrls: ['./table-custumers.component.css']
})

export class TableCustumersComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<Customer>();
   customerData?: Customer[] | undefined;
  //customer: Customer = new Customer();
  
  ngOnInit(): void {
    this.getCustomers();
    

  }

  


  displayedColumns: string[] = ['name', 'email', 'phone', 'company', 'priority', 'edit', 'delete'];
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild (MatSort, {static: true})sort!: MatSort;
  constructor(private CustomersService: CustomersService) {}

  getCustomers(): void {
    this.CustomersService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      //ELEMENT_DATA = data;
      this.customerData;
      this.dataSource.data = data;
    });
  }
  
  
ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  } 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

