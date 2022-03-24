import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  token = false;
  constructor(public authService:AuthService, private router:Router) { 
    const tok = this.authService.checkToken()
    if(tok)
    {
      this.token=true;
    }
    else{
      this.token=false;
    }
  }

  logout()
  {
    const token = this.authService.getToken()
    if(token)
    {
      this.authService.removeToken()
      this.router.navigate(['auth/login'])
    } 
  }

  ngOnInit(): void {
  }





}
