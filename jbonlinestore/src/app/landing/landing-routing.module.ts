import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: 'home', component: LandingComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path:'product/:id',
        loadChildren:()=>import('./productdetails/productdetails.module').then(m=>m.ProductdetailsModule)
      },
      {
        path:'allproduct',
        loadChildren:()=>import('./allproduct/allproduct.module').then(m=>m.AllproductModule)
      },
      // {
      //   path:'contact',
      //   loadChildren:()=>import('./contact/contact.module').then(m=>m.ContactModule)
      // }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
