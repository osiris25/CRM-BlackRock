import { Component, OnInit } from '@angular/core';
import { OpportunityService } from './opportunityService/opportunity.service';
import Opportunity from './opportunity.model';
import { map } from 'rxjs/internal/operators';
import Customer from '../customers/customers.model';
import { CustomersService } from '../customers/customerService/customers.service';
import { ProductsService } from '../products/productsServices/products.service';
import { PromotersService } from '../promoters/promoterService/promoters.service';
import Product from '../products/products.model';
import Promoter from '../promoters/promoters.model';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css']
})
export class OpportunityComponent implements OnInit {
	opportunityData?: Opportunity[];
	CustomersData?: Customer[];
	PromotersData?: Promoter[];
	ProductsData?: Product[];
  opportunity: Opportunity = new Opportunity();
  submitted = false;

  constructor(
		private OpportunityService: OpportunityService,
		private CustomerService: CustomersService,
		private PromoterService: PromotersService,
		private ProductService: ProductsService,
			) { }

  ngOnInit(): void {
		this.filterCustomers();
		this.filterProduct();
		this.filterPromoters();
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
      this.CustomersData = data;
		console.log(this.CustomersData[0].company);

    });
  }

	filterPromoters(): void {
    this.PromoterService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.PromotersData = data;
		console.log("promotores",this.PromotersData);

    });
  }
	filterProduct(): void {
    this.ProductService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.ProductsData = data;
		console.log("producto",this.ProductsData);

    });
  }


  newTutorial(): void {
    this.submitted = false;
    this.opportunity = new Opportunity();
  }


}
