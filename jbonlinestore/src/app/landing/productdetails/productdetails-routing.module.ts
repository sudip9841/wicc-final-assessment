import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductdetailsResolver } from './resolver/productdetails.resolver';
import { SimilarproductsResolver } from './resolver/similarproducts.resolver';

const routes: Routes = [
  {
    path:'',
    resolve:{
      productDetails:ProductdetailsResolver,
      similarProducts:SimilarproductsResolver
    },
    component:ProductdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductdetailsRoutingModule {

 }
