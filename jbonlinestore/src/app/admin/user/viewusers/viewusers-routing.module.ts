import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewusersComponent } from './viewusers/viewusers.component';

const routes: Routes = [
  {
    path:'',
    component:ViewusersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewusersRoutingModule { }
