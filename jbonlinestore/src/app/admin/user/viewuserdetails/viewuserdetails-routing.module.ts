import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewuserdetailsComponent } from './viewuserdetails/viewuserdetails.component';

const routes: Routes = [
  {
    path:'',
    component:ViewuserdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewuserdetailsRoutingModule { }
