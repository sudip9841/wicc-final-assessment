import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EdituserRoutingModule } from './edituser-routing.module';
import { EdituserComponent } from './edituser/edituser.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    EdituserComponent
  ],
  imports: [
    CommonModule,
    EdituserRoutingModule,
    SharedModule
  ]
})
export class EdituserModule { }
