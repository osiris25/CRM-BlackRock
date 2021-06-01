import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import Opportunity from '../opportunity.model';
import { OpportunityService } from '../opportunityService/opportunity.service';


@Component({
  selector: 'app-edit-opportunity',
  templateUrl: './edit-opportunity.component.html',
  styleUrls: ['./edit-opportunity.component.css'],
})
export class EditOpportunityComponent implements OnInit {

  @Input() OpportunityInput?: Opportunity; 

  constructor(
    private OpportunityService: OpportunityService,
    private fb: FormBuilder
    ) {}

  public editOpportunityForm =  this.fb.group({
    id: new FormControl(''),
    id_customer: new FormControl(''),
    id_product: new FormControl(''),
    id_promoter: new FormControl(''),
    price: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
  });

  ngOnInit(){
    this.initValuesForm();
  }

  editCustomer(oportunity: Opportunity) {
    //  //console.log(customerId, typeof(customerId) );
    //  this.CustomersService.updateCustomer(customer)
    //    .then(() => ('The tutorial was updated successfully!'))
    //    .catch((err) => console.log(err));
       
  }

  private initValuesForm(): void {
    this.editOpportunityForm.patchValue({
      id: this.OpportunityInput?.id,
      id_customer: [this.OpportunityInput?.id_customer],
      id_product: [this.OpportunityInput?.id_product],
      id_promoter: [this.OpportunityInput?.id_promoter],
      price: this.OpportunityInput?.price,
      status: this.OpportunityInput?.status,
    });

  }
}
