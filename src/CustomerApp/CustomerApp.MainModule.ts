import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CustomerAppComponent } from './Customer/CustomerApp.CustomerComponent';
import { MasterPageComponent } from './Home/CustomerApp.MasterPageComponent';
import { SupplierComponent } from './Supplier/CustomerApp.SupplierComponent';
import { HomeComponent } from './Home/CustomerApp.HomeComponent';
import { ThankYouComponent } from './Home/CustomerApp.ThankYouComponent';
import { MainRoutes } from './Routing/CustomerApp.MainRouting';

@NgModule({
  declarations: [
    CustomerAppComponent,
    MasterPageComponent, HomeComponent,
    SupplierComponent, ThankYouComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class CustomerAppModule { }
