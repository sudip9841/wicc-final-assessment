import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.url
  constructor(private http:HttpClient) { }


  saveToken(token:string)
  {
    localStorage.setItem('token',token)
  }

  getToken():string|null{
    return localStorage.getItem('token')
  }

  removeToken()
  {
    localStorage.removeItem('token')
  
  }

  checkToken():boolean{
    let token = localStorage.getItem('token')
    if(token)
    {
      return true;
    }
    return false;
  }

  userLogin(data:any):Observable<any>
  {
    return this.http.post(this.url+'login/',data)
  }

  userRegister(data:any):Observable<any>{
    return this.http.post(this.url+'register/',data)
  }

  isAdmin():Observable<any>{
    return this.http.get(this.url+'isadmin/')
  }


}
