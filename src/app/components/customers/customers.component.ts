import { Component, OnInit } from '@angular/core';
import { CustomersService } from './customerService/customers.service';
import Customer from './customers.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customer: Customer = new Customer();
  submitted = false;

  constructor(private CustomersService: CustomersService) { }

  ngOnInit(): void {
  }

  saveCustomer(): void {
    this.CustomersService.create(this.customer).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  onOptionsSelected(e:any) {
    //e.preventDefault();
    console.log(this.customer.priority);
    //this.customer.priority=e.target.value;
    //return false;
  }

  newTutorial(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

}
