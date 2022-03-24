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
export class SimilarproductsResolver implements Resolve<boolean> {
  constructor(private productService:ProductsService)
  {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const id = route.paramMap.get('id')
    if(id){
      return this.productService.getSimilarProducts(id)
    }
    return of(true);
  }
}
