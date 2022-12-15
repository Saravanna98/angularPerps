import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatecustomerComponent } from './customers/createcustomer.component';
import { ListcustomersComponent } from './customers/listcustomers.component';

const routes: Routes = [
  {path: "list", component: ListcustomersComponent },
  {path: "edit/:id", component: CreatecustomerComponent},
  {path:"",redirectTo:"/list",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
