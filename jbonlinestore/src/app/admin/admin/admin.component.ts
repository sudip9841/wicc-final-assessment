import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public showUser:boolean = false;
  public showProduct:boolean = false;


  constructor(private authService:AuthService, private router : Router) { }

  ngOnInit(): void {
  }
  userToggle()
  {
    this.showUser = !this.showUser
  }
  productToggle()
  {
    this.showProduct = !this.showProduct
  }

  logout()
  {
    this.authService.removeToken()
    this.router.navigate(['/auth/login'])
  }

}
