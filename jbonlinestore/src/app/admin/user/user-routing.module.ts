import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'',redirectTo:'adduser',pathMatch:'full'
  },
  {
    path:'',
    component:UserComponent,
    children:[
      {
        path:'adduser',
        loadChildren:()=>import('./adduser/adduser.module').then(m=>m.AdduserModule)
      },
      {
        path:'viewusers',
        loadChildren:()=>import('./viewusers/viewusers.module').then(m=>m.ViewusersModule)
      },
      {
        path:'adduserdetails',
        loadChildren:()=>import('./adduserdetails/adduserdetails.module').then(m=>m.AdduserdetailsModule)
      },
      {
        path:'viewuserdetails',
        loadChildren:()=>import('./viewuserdetails/viewuserdetails.module').then(m=>m.ViewuserdetailsModule)
      },
      {
        path:'edituser/:id',
        loadChildren:()=>import('./edituser/edituser.module').then(m=>m.EdituserModule)
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
