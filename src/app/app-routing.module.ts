import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './components/customers/customers.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OpportunityComponent } from './components/opportunity/opportunity.component';
import { ProductsComponent } from './components/products/products.component';
import { PromotersComponent } from './components/promoters/promoters.component';
import { ReportComponent } from './components/report/report.component';
import { AuthGuard } from './guards/auth.guard';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';

const routes: Routes = [
	{
		path: '', component: ContainerAppComponent,
		children: [
			{path:"home", component:HomeComponent, canActivate:[AuthGuard]},
	{path:"customers", component:CustomersComponent, canActivate:[AuthGuard]},
	{path:"products", component:ProductsComponent, canActivate:[AuthGuard]},
	{path:"opportunity", component:OpportunityComponent, canActivate:[AuthGuard]},
	{path:"promoters", component:PromotersComponent, canActivate:[AuthGuard]},
      {path:"reports", component:ReportComponent, canActivate:[AuthGuard]},
		]
	},
	{ path: "login", component: LoginComponent, pathMatch: "full"},
	
	

];

// pathMatch:"full", redirectTo: "login",

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
