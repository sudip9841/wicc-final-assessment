import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartaccessGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = this.authService.checkToken()
      if(token)
      {
        return new Observable<boolean>(obs => {
          this.authService.isAdmin().subscribe(
            data => {
              if (data['message'] == true) {
                
                this.router.navigate(['/'])
                obs.next(false);
              }
              else {
                obs.next(true);
              }
            }
          );
        });
      }
      else{
        this.router.navigate(['/auth/login'])
        return false
      }
  }
  
}
