import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../model/customer.model';
import { Department } from '../model/department.model';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent implements OnInit {


  departments: Department[] = [
    { id: 123, name: "IT" },
    { id: 124, name: "Payroll" },
    { id: 125, name: "HR" },
    { id: 126, name: "HelpDesk" },
    { id: 127, name: "SSD" },
  ]

  fullname: any;
  email: any;
  gender: any;
  isActive: any;
  photoPath: any;
  department: any;
  previewPhoto: boolean = false;


  customer: Customer = {
    id: null,
    name: null,
    gender: null,
    email: null,
    isActive: true,
    department: "-1",
    photoPath: null
  }
  constructor(private CustService: CustomerService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(results => {
      let id = +results.get('id');
      if (id == 0) {
        this.customer = {
          id: null,
          name: null,
          gender: null,
          email: null,
          isActive: true,
          department: "-1",
          photoPath: null
        }
      }
      else {
        this.customer = this.CustService.getCustomerById(id);
      }
    })
  }




  
  saveCustomerData(customer: any): void {
    this.CustService.saveCustomer(customer);
    this.router.navigate(['/list'])
  }
  toggleImage() {
    this.previewPhoto = !this.previewPhoto;
  }
}
