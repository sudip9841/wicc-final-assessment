import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './layout/header/header.component';
import { SlidersComponent } from './layout/sliders/sliders.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SharedModule } from '../shared/shared/shared.module';
import { MaleshoesComponent } from './layout/maleshoes/maleshoes.component';
import { BrandComponent } from './layout/brand/brand.component';
import { FemaleshoesComponent } from './layout/femaleshoes/femaleshoes.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent,
    SlidersComponent,
    FooterComponent,
    MaleshoesComponent,
    BrandComponent,
    FemaleshoesComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    CarouselModule
  ],
  exports:[
    SlidersComponent,
    BrandComponent,
    MaleshoesComponent,
    FemaleshoesComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class LandingModule { }
