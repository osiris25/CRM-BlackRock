import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import Opportunity from '../opportunity.model';
import { OpportunityService } from '../opportunityService/opportunity.service';

@Component({
  selector: 'app-create-opportunity',
  templateUrl: './create-opportunity.component.html',
  styleUrls: ['./create-opportunity.component.css']
})
export class CreateOpportunityComponent implements OnInit {

  customerData?: Opportunity[];
  customer: Opportunity = new Opportunity();
  submitted = false;

  constructor(private OpportunityService: OpportunityService) { }

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

  addNewCustomer(data: Opportunity) {
    console.log('Nuevo cliente', data);
    this.customer = data;
    this.saveCustomer();
  }
  saveCustomer(): void {
    this.OpportunityService.create(this.customer).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }
}

