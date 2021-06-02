import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators';
import DetailOportunity from './detail-oportunity.model';
import { DetailOpportunityService } from './detailOportunity.service'
import Opportunity from '../opportunity.model';
import { OpportunityService } from '../opportunityService/opportunity.service'
import { CustomersService } from '../../customers/customerService/customers.service';
import { ProductsService } from '../../products/productsServices/products.service';
import { PromotersService } from '../../promoters/promoterService/promoters.service';
import Customer from '../../customers/customers.model';
import Promoter from '../../promoters/promoters.model';
import Product from '../../products/products.model';

@Component({
  selector: 'app-detail-oportunity',
  templateUrl: './detail-oportunity.component.html',
  styleUrls: ['./detail-oportunity.component.css']
})
export class DetailOportunityComponent implements OnInit {

  // DetailOportunityData?: DetailOportunity[]=[];
  // elementData?: DetailOportunity[]=[];;

  DetailOportunityData?: DetailOportunity[];
  elementData?:DetailOportunity[];
  OpportunityData?: Opportunity[]=[];
  CustomersData?: Customer[]=[];
	PromotersData?: Promoter[]=[];
	ProductsData?: Product[]=[];

  constructor(
    private DetailOpportunityService: DetailOpportunityService,
    private OpportunityService: OpportunityService,
    private CustomerService: CustomersService,
		private PromoterService: PromotersService,
		private ProductService: ProductsService,
    private _route: ActivatedRoute
  ) {
    //console.log(this._route.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
    //this.getOportunity();
    this.getDetail();
    this.filterOpportunity()
    this.filterCustomers();
		this.filterProduct();
		this.filterPromoters();
    
  }

  getDetail(): void {
    this.DetailOpportunityService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {      
      this.DetailOportunityData = data;
      this.getOportunity();
    });
  }

  getOportunity() {
    this.elementData = this.DetailOportunityData?.filter(element=>{ 
      return element.id_oportunity===this._route.snapshot.paramMap.get('id');
    });
  }

  filterOpportunity(): void {
    this.OpportunityService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.OpportunityData = data.filter(element=>{ 
        return element.id===this._route.snapshot.paramMap.get('id');
      });
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
    });
  }

 

}
