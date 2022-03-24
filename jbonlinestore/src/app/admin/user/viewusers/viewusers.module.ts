import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewusersRoutingModule } from './viewusers-routing.module';
import { ViewusersComponent } from './viewusers/viewusers.component';


@NgModule({
  declarations: [
    ViewusersComponent
  ],
  imports: [
    CommonModule,
    ViewusersRoutingModule
  ]
})
export class ViewusersModule { }
