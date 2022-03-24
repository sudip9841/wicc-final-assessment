import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductdetailsRoutingModule } from './productdetails-routing.module';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { RouterModule } from '@angular/router';
import { SimilarproductsComponent } from './similarproducts/similarproducts.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    ProductdetailsComponent,
    SimilarproductsComponent
  ],
  imports: [
    CommonModule,
    ProductdetailsRoutingModule,
    SharedModule,
    RouterModule,
    CarouselModule
  ]
})
export class ProductdetailsModule {
  constructor()
  {
    
  }
 }
