import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagenotfoundRoutingModule } from './pagenotfound-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
  declarations: [
    PagenotfoundComponent
  ],
  imports: [
    CommonModule,
    PagenotfoundRoutingModule,
    SharedModule,
  ]
})
export class PagenotfoundModule { }
