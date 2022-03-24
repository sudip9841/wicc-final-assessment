import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {
    path:'',
    component:OrdersComponent
  },
  {
    path:'edit/:id',
    loadChildren:()=>import('./editorders/editorders.module').then(m=>m.EditordersModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
