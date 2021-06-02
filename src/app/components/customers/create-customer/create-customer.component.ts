import { Component, Input, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import Customer from '../customers.model';
import { CustomersService } from '../customerService/customers.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customerData?: Customer[];
  customer: Customer = new Customer();
  submitted = false;

  constructor(private CustomersService: CustomersService) { }

  public newCustomerForm = new FormGroup ({
    name: new FormControl('', Validators.required),
    email: new FormControl(''),
    phone: new FormControl(''),
    priority: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    customerType: new FormControl('', Validators.required),
  })

  ngOnInit(): void {
  }

  addNewCustomer(data: Customer) {
    console.log('Nuevo cliente', data);
    this.customer = data;
    this.saveCustomer();
  }
  saveCustomer(): void {
    this.CustomersService.create(this.customer).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }
}

