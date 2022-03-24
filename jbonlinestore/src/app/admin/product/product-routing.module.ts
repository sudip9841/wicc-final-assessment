import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path:'',redirectTo:'addproduct',pathMatch:'full'
  },
  {
    path:'',
    component:ProductComponent,
    children:[
      {
        path:'addproduct',
        loadChildren:()=>import('./addproduct/addproduct.module').then(m=>m.AddproductModule)
      },
      {
        path:'viewproducts',
        loadChildren:()=>import('./viewproducts/viewproducts.module').then(m=>m.ViewproductsModule)
      },
      {
        path:'editproduct/:id',
        loadChildren:()=>import('./editproduct/editproduct.module').then(m=>m.EditproductModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
