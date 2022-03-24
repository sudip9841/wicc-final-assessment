import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared/shared.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainInterceptor } from './shared/shared/main.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { CustomfilterPipe } from './customfilter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CustomfilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
      timeOut: 2000,
    }),

  ],
  exports:[
    CustomfilterPipe
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:MainInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
