import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountsGuard } from './guard/accounts.guard';
import { CartGuard } from './guard/cart.guard';
import { CartaccessGuard } from './guard/cartaccess.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'profile', pathMatch: 'full'
  },
  {
    path: '', component: AccountsComponent,
    canActivateChild:[AccountsGuard],
    children: [
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path:'orders',
        loadChildren:()=>import('./orders/orders.module').then(m=>m.OrdersModule)
      }
    ]
  },
  {
    path:'cart',
    // canLoad:[CartGuard],
    canActivate:[CartaccessGuard],
    loadChildren:()=>import('./cart/cart.module').then(m=>m.CartModule)
  },
  {
    path:'checkout',
    // canLoad:[CartGuard],
    canActivate:[CartaccessGuard],
    loadChildren:()=>import('./checkout/checkout.module').then(m=>m.CheckoutModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
