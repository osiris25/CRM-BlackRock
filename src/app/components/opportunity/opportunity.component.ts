import { Component, OnInit } from '@angular/core';
import { OpportunityService } from './opportunityService/opportunity.service';
import Opportunity from './opportunity.model';
import { map } from 'rxjs/internal/operators';
import Customer from '../customers/customers.model';
import { CustomersService } from '../customers/customerService/customers.service';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css']
})
export class OpportunityComponent implements OnInit {
	opportunityData?: Opportunity[];
	CustomersService?: Customer[];
  opportunity: Opportunity = new Opportunity();
  submitted = false;

  constructor(
		private OpportunityService: OpportunityService,
		private CustomerService: CustomersService
			) { }

  ngOnInit(): void {
		this.filterCustomers();
  }

  saveOpportunity(): void {
    this.OpportunityService.create(this.opportunity).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

	 filterCustomers(): void {
    this.CustomerService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.CustomersService = data;
		console.log(this.CustomersService);

    });
  }


  newTutorial(): void {
    this.submitted = false;
    this.opportunity = new Opportunity();
  }


}
