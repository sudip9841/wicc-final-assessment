import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = environment.url
  constructor(private http: HttpClient) { 

  }

  getUsers():Observable<any>
  {
    return this.http.get(this.url+'user/')
  }

  deleteUser(id:any){
    return this.http.delete(this.url+'user/'+id+'/')
  }

  updateUser(id:any,data:any)
  {
    return this.http.put(this.url+'user/'+id+'/',data)
  }

  getSingleUser(id:any):Observable<any>{
    return this.http.get(this.url+'user/'+id+'/')
  }


  addProduct(data:any)
  {
    return this.http.post(this.url+'prod/',data)
  }

  getAllPorduct():Observable<any>{
    return this.http.get(this.url+'prod/')
  }

  deleteProduct(id:any){
    return this.http.delete(this.url+'prod/'+id+'/')
  }

  getOneProduct(id:any):Observable<any>
  {
    return this.http.get(this.url+'prod/'+id+'/')
  }

  updateProduct(id:any,data:any):Observable<any>
  {
    return this.http.patch(this.url+'prod/'+id+'/',data)
  }


  getUserDetails():Observable<any>{
    return this.http.get(this.url+'udetails/')
  }

  addUserDetails(data:any):Observable<any>{
    return this.http.post(this.url+'udetails/',data)
  }


  editUserDetails(data:any):Observable<any>{
    return this.http.put(this.url+'udetails/',data)
  }


  getOrders():Observable<any>{
    return this.http.get(this.url+'ordersadmin/')
  }

  deleteOrders(id:any){
    return this.http.delete(this.url+'ordersadmin/'+id+'/')
  }

  updateOrder(id:any,data:any){
    return this.http.patch(this.url+'ordersadmin/'+id+'/',data)
  }

  getOneOrder(id:any):Observable<any>
  {
    return this.http.get(this.url+'ordersadmin/'+id+'/')
  }



}
