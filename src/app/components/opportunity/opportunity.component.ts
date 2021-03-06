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
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css']
})
export class OpportunityComponent implements OnInit {

	OpportunityData?: Opportunity[]= [];
	CustomersData?: Customer[]=[];
	PromotersData?: Promoter[]=[];
	ProductsData?: Product[]=[];
  opportunity: Opportunity = new Opportunity();
  submitted = false;

  constructor(
		private OpportunityService: OpportunityService,
		private CustomerService: CustomersService,
		private PromoterService: PromotersService,
		private ProductService: ProductsService,
    public dialog: MatDialog,
	) { }

  ngOnInit(): void {
		this.filterCustomers();
		this.filterProduct();
		this.filterPromoters();
    this.filterOpportunity();
  }

  filterOpportunity(): void {
    this.OpportunityService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.OpportunityData = data;
    });
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
  // newTutorial(): void {
  //   this.submitted = false;
  //   this.opportunity = new Opportunity();
  // }


  onNewOpportunity() {
    this.openDialog();
  }

  openDialog(Opportunity?:Opportunity): void {
    const config ={
      data:{
        message: Opportunity ? 'Editar oportunidad' : 'Agregar oportunidad',
        OpportunityForm: Opportunity,
        view: 'opportunity'
      }
    };

    const dialogRef = this.dialog.open(ModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Open');

    })
  }

  onEditOpportunity(customer:any){
    console.log('Edit');
    this.openDialog2(customer);
  }
  openDialog2(Opportunity?:Opportunity): void {
    const config ={
      data:{
        message: Opportunity ? 'Editar oportunidad' : 'Agregar oportunidad',
        OpportunityForm: Opportunity,
        view: 'editOpportunity'
      }
    };

    const dialogRef = this.dialog.open(ModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Open');

    })
  }
 onViewDetail(data: string){
  console.log('Hola detalle')
 }
 openOpportunity(data: string){
  console.log('Hola detalle')
 }

}
