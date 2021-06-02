import { Component, OnInit } from '@angular/core';
import { CustomersService } from './customerService/customers.service';
import Customer from './customers.model';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customerData?: Customer[];
  customer: Customer = new Customer();
  submitted = false;

  constructor(private CustomersService: CustomersService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  saveCustomer(): void {
    this.CustomersService.create(this.customer).then(() => {
      console.log('Created new item successfully!');
    });
  }

  getCustomers(): void {
    this.CustomersService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.customerData = data;
    });
  }

  // newTutorial(): void {
  //   this.submitted = false;
  //   this.customer = new Customer();
  // }

}
