import { Injectable } from "@angular/core";
import { Customer } from "../model/customer.model";

@Injectable()
export class CustomerService {
    listcustomers: Customer[] = [
        {
          id: 1,
          name: "Saro",
          gender: "male",
          email: "saro@gmail.com",
          department: "ECE",
          //dateofbirth: new Date('12/12/1998'),
          //ph: 123123,
          isActive: true,
          photoPath: "assets/saro.jpg"
        },
        {
          id: 2,
          name: "kareena",
          gender: "female",
          email: "kareena2@hotmail.com",
          department: "ECE",
          //dateofbirth: new Date('12/12/1998'),
          // ph: 123124,
          isActive: true,
          photoPath: "assets/kareena.jpg"
        },
        {
          id: 3,
          name: "katrina",
          gender: "female",
          email: "katrina@outlook.com",
          department: "ECE",
          //dateofbirth: new Date('12/12/1998'),
          //ph: 123125,
          isActive: true,
          photoPath: "assets/katrina.jpg"
        },
      ];

      getCustomer() : Customer[] {
          return this.listcustomers;
      }

      saveCustomer(customer){
        this.listcustomers.push(customer);
      }

      getCustomerById(id:number){
        return this.listcustomers.find(c =>c.id==id);
      }

      deleteCustomer(id: number){
        const i = this.listcustomers.findIndex(c =>c.id ===id);
        if(i!=null){
          this.listcustomers.splice(i,1);
        }
      }
}