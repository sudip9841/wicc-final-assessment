import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = environment.url
  constructor(private http:HttpClient) { }

  getProductByBrand(brandName:string):Observable<any>
  {
    return this.http.get(this.url+'product/brand/',{
      params: new HttpParams().set('brand', brandName)
  })
  }

  getProductByGender(genderName:string):Observable<any>
  {
    return this.http.get(this.url+'product/gender/',{
      params: new HttpParams().set('gender', genderName)
  })
  }

  getProduct(id:any):Observable<any>
  {
    return this.http.get(this.url+'product/',{
      params: new HttpParams().set('id', id)
    })
  }

  getSimilarProducts(id:any):Observable<any>{
    return this.http.get(this.url+'similarproducts/',{
      params: new HttpParams().set('id', id)
    })
  }

  getAllProduct():Observable<any>{
    return this.http.get(this.url+'viewallprod/')
  }

  getProductOrder():Observable<any>
  {
    return this.http.get(this.url+'orders/')
  }

}
