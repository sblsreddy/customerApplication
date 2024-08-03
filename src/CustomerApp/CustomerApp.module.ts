import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CustomerAppComponent } from './CustomerApp.component';

@NgModule({
  declarations: [
    CustomerAppComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [CustomerAppComponent]
})
export class CustomerAppModule { }
