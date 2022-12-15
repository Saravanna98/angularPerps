import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../model/customer.model';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-display-customer',
  templateUrl: './display-customer.component.html',
  styleUrls: ['./display-customer.component.css']
})
export class DisplayCustomerComponent implements OnInit {

  @Input()
  customer: Customer;
  @Output() notify: EventEmitter<string>= new EventEmitter<string>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private custService: CustomerService
  ) { }

  ngOnInit(): void {

  }

  // ngonChanges(changes: SimpleChanges){
  //   const previousCust= <Customer>changes.customer.previousValue;
  //   const currentCust= <Customer>changes.customer.currentValue;
  //   console.log("Previous : "+ (previousCust ? previousCust.name : null))
  //   console.log("Current : "+ currentCust.name)
  // }
  // HandleClick(){
  //   this.notify.emit(this.customer.name);
  // }
  editCustomer()
  {
    this.router.navigate(['/edit',this.customer.id])
  }
  deleteCustomer()
  {
    this.custService.deleteCustomer(this.customer.id)
  }
}
