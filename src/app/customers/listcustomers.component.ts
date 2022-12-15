import { Component, OnInit } from '@angular/core';
// import { MaxLengthValidator } from '@angular/forms';
// import { getMaxListeners } from 'process';
import { Customer } from '../model/customer.model';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-listcustomers',
  templateUrl: './listcustomers.component.html',
  styleUrls: ['./listcustomers.component.css']
})
export class ListcustomersComponent implements OnInit {


  customers: Customer[] = [];
  dataFromChild: string
  // customerToDisplay: Customer;
  // private arrayIndex = 1;
  constructor(private CustService: CustomerService) { }

  ngOnInit() {
    this.customers = this.CustService.getCustomer();
    //this.customerToDisplay = this.customers[0];

  }
  HandleNotify(data : string){
    this.dataFromChild= data;


  }

  // nextCustomer(): void {
  //   if (this.arrayIndex <= 2) {
  //     this.customerToDisplay = this.customers[this.arrayIndex];
  //     this.arrayIndex++;
  //   }
  //   else {
  //     this.customerToDisplay = this.customers[0];
  //     this.arrayIndex = 1;
  //   }

  // }

}
