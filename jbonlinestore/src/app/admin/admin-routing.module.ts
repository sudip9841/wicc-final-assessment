import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './guard/admin.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path:'',
    component:AdminComponent,
    canActivateChild:[AdminGuard],
    children:[
      {
        path:'dashboard',
        loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
      },
      {
        path:'user',
        loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
      },
      {
        path:'product',
        loadChildren:()=>import('./product/product.module').then(m=>m.ProductModule)
      },
      {
        path:'orders',
        loadChildren:()=>import('./orders/orders.module').then(m=>m.OrdersModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
