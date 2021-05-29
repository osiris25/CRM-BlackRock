import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './components/customers/customers.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
	{ path: "login", component: LoginComponent, pathMatch: "full"},
	{path:"home", component:HomeComponent, canActivate:[AuthGuard]},
	{path:"customers", component:CustomersComponent, canActivate:[AuthGuard]},
	{path:"products", component:ProductsComponent, canActivate:[AuthGuard]},
];

// pathMatch:"full", redirectTo: "login",

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
