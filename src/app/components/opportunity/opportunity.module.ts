import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpportunityComponent } from './opportunity.component';
import { MaterialModule } from 'src/app/material/material.module';
import { EditOpportunityComponent } from './edit-opportunity/edit-opportunity.component';
import { CreateOpportunityComponent } from './create-opportunity/create-opportunity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DetailOportunityComponent } from './detail-oportunity/detail-oportunity.component';

@NgModule({
  declarations: [
    OpportunityComponent,
    EditOpportunityComponent,
    CreateOpportunityComponent,
    DetailOportunityComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    EditOpportunityComponent,
    OpportunityComponent,
    CreateOpportunityComponent,
    DetailOportunityComponent
  ]
})
export class OpportunityModule { }
