import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductsService } from 'src/app/service/products.service';

@Injectable({
  providedIn: 'root'
})
export class MaleshoesResolver implements Resolve<boolean> {
  constructor(private productService:ProductsService)
  {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.productService.getProductByGender('male');
  }
}
