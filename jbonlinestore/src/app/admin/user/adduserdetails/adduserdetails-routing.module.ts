import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserdetailsComponent } from './adduserdetails/adduserdetails.component';

const routes: Routes = [
  {
    path:'',
    component:AdduserdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdduserdetailsRoutingModule { }
