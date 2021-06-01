import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {CustomersService} from '../../components/customers/customerService/customers.service';
import Customer from '../../components/customers/customers.model';
import { map } from 'rxjs/internal/operators';
import { MatTableDataSource } from '@angular/material/table';

import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../components/modal/modal.component';

@Component({
  selector: 'app-table-custumers',
  templateUrl: './table-custumers.component.html',
  styleUrls: ['./table-custumers.component.css']
})

export class TableCustumersComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<Customer>();
  customerData?: Customer[] | undefined;

  ngOnInit(): void {
    this.getCustomers();
  }

  displayedColumns: string[] = ['name', 'email', 'phone', 'company', 'priority', 'customerType', 'actions', ];
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild (MatSort, {static: true})sort!: MatSort;
  constructor(private CustomersService: CustomersService, public dialog: MatDialog) {}

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

  onDeletePost(customer:any){
    console.log('Delete customer', customer)
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'Esto es definitivo',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    }).then( result =>{
      if(result.value){
        this.CustomersService.delete(customer.id)
          .then(() => {})
          .catch((err) => console.log(err));
        Swal.fire('Deleted!', 'El cliente ha sido eliminado', 'success');
      }
    })
  }

  onEditPost(customer:any){
    console.log('Edit');
    this.openDialog2(customer);
  }
  onNewPost() {
    this.openDialog();
  }

  openDialog(customer?:Customer): void {
    const config ={
      data:{
        message: customer ? 'Editar cliente' : 'Agregar cliente',
        content: customer,
        view: 'createcustomer'
      }
    };

    const dialogRef = this.dialog.open(ModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Open');

    })
  }

  openDialog2(customer?:Customer): void {
    const config ={
      data:{
        message: customer ? 'Editar cliente' : 'Agregar cliente',
        content: customer,
        view: 'editcustomer'
      }
    };

    const dialogRef = this.dialog.open(ModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Open');

    })
  }
}
