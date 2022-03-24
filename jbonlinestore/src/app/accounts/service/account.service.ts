import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }
  url=environment.url


  getCart():Observable<any>
  {
    return this.http.get(this.url+'cart/')
  }

  // deleteCart(id:any){
  //   return this.http.delete(this.url+'cart/',{
  //     params:new HttpParams().set('id',id)
  //   })
  // }
  deleteCart(id:any){
    return this.http.delete(this.url+'cart/'+id+'/')
  }
  // getProductByGender(genderName:string):Observable<any>
  // {
  //   return this.http.get(this.url+'product/gender/',{
  //     params: new HttpParams().set('gender', genderName)
  // })
  // }

  addToCart(id:any)
  {
    let data={'product':id}
    return this.http.post(this.url+'cart/',data);
  }


  placeOrder(id:any)
  {
    let data={'product':id}
    return this.http.post(this.url+'orders/',data)
  }

  deleteOrder(id:any)
  {
    return this.http.delete(this.url+'orders/'+id+'/')
  }

}
