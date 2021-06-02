import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import Opportunity from '../opportunity.model';
import { OpportunityService } from '../opportunityService/opportunity.service';
import { OpportunityComponent } from '../opportunity.component';
import { CustomersService } from '../../customers/customerService/customers.service';
import { map } from 'rxjs/internal/operators';
import Customer from '../../customers/customers.model';
import { PromotersService } from '../../promoters/promoterService/promoters.service';
import Promoter from '../../promoters/promoters.model';
import Product from '../../products/products.model';
import { ProductsService } from '../../products/productsServices/products.service';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-create-opportunity',
  templateUrl: './create-opportunity.component.html',
  styleUrls: ['./create-opportunity.component.css']
})
export class CreateOpportunityComponent implements OnInit {

  customerData?: Opportunity[];
  customer: Opportunity = new Opportunity();
  CustomersData?: Customer[]=[];
  PromotersData?: Promoter[]=[];
  ProductsData?: Product[]=[];
  submitted = false;

  opcionSeleccionado: string  = '0';
  verSeleccion: string | undefined = '';

  constructor(
    private OpportunityService: OpportunityService,
    private CustomerService: CustomersService,
    private PromoterService: PromotersService,
    private ProductService: ProductsService,
    ) { }

  public newOpportunityForm = new FormGroup ({
    id_customer: new FormControl(''),
    id_product: new FormControl(''),
    id_promoter: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
  })

  ngOnInit(): void {
    this.filterCustomers();
    this.filterPromoters();
    this.filterProduct();
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

  capturar(e:MatSelectChange ) {
    this.verSeleccion = this.ProductsData?.filter(element=>{
      return element.id==this.opcionSeleccionado
    })[0].keyFactor?.badge;
}

addNewOpportunity(data: Customer) {
  console.log('Nuevo cliente', data);
  this.customer = data;
  this.saveOpportunity();
}
saveOpportunity(): void {
  this.OpportunityService.create(this.customer).then(() => {
    console.log('Created new item successfully!');
    this.submitted = true;
  });
}

}

