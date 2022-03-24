import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditordersComponent } from './editorders/editorders.component';

const routes: Routes = [
  {
    path:'',
    component:EditordersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditordersRoutingModule { }
