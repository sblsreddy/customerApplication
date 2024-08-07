import { Component } from '@angular/core';
import { Customer } from './CustomerApp.model';

@Component({
  
  templateUrl: './CustomerApp.CustomerView.html'
})
export class CustomerComponent {
  title = 'customerApplication';

  // single model customer element
  customerModel : Customer = new Customer();

  // multiple model customers
  customerModels : Array<Customer> = new Array();

  add(){
    this.customerModels.push(this.customerModel);
    this.customerModel = new Customer(); //clear UI and adds a new customer 
  }

}
