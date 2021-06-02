import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { ModalComponent } from './shared/components/modal/modal.component';
import { CreateCustomerModule } from './components/customers/create-customer/create-customer.module';
import { PromotersComponent } from './components/promoters/promoters.component';
import { CustomersModule } from './components/customers/customers.module';
import { OpportunityModule } from './components/opportunity/opportunity.module';
import { MenuComponent } from './shared/menu/menu.component';
import { LineChartsComponent } from './components/line-charts/line-charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PieChartComponent } from './components/lineCharts/pie-chart/pie-chart.component';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { ReportComponent } from './components/report/report.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    HomeComponent,
    ModalComponent,
    PromotersComponent,
    MenuComponent,
    LineChartsComponent,
    PieChartComponent,
    ContainerAppComponent,

  ReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    AngularFireAuthModule,
    MaterialModule,
    CreateCustomerModule,
    CustomersModule,
    OpportunityModule,
		NgxChartsModule
  ],
  entryComponents: [ModalComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
