import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListcustomersComponent } from './customers/listcustomers.component';
import { CreatecustomerComponent } from './customers/createcustomer.component';
import { FormsModule} from '@angular/forms'
import { SelectRequiredValidator } from './shared/select-required-validator.directive';
import { CustomerService } from './service/customer.service';
import { DisplayCustomerComponent } from './customers/display-customer.component';
@NgModule({
  declarations: [
    AppComponent,
    ListcustomersComponent,
    CreatecustomerComponent,
    SelectRequiredValidator,
    DisplayCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
