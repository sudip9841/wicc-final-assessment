import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrandResolver } from './resolver/brand.resolver';
import { FemaleshoesResolver } from './resolver/femaleshoes.resolver';
import { MaleshoesResolver } from './resolver/maleshoes.resolver';

const routes: Routes = [
  {path:'',
  resolve:{
    brandData:BrandResolver,
    maleShoesData:MaleshoesResolver,
    femaleShoesData:FemaleshoesResolver
  },
  component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
