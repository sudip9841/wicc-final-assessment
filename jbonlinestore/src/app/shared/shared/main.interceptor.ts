import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SpinnerService } from 'src/app/service/spinner.service';
import { AuthService } from 'src/app/service/auth.service';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor(private spinnerService:SpinnerService,private authService:AuthService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinnerService.showSpinner()

    const token = this.authService.getToken();
    if(token)
    {
      request = request.clone({
      setHeaders: {Authorization: `Token ${token}`}
       })
    }

    return next.handle(request).pipe(finalize(()=>{
        this.spinnerService.hideSpinner()
    }));
  }
}
