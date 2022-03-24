import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditordersRoutingModule } from './editorders-routing.module';
import { EditordersComponent } from './editorders/editorders.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    EditordersComponent
  ],
  imports: [
    CommonModule,
    EditordersRoutingModule,
    SharedModule
  ]
})
export class EditordersModule { }
