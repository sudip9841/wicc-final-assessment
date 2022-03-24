import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AccountService } from 'src/app/accounts/service/account.service';
import { MessageService } from 'src/app/service/message.service';
import { OwlService } from 'src/app/service/owl.service';

@Component({
  selector: 'app-maleshoes',
  templateUrl: './maleshoes.component.html',
  styleUrls: ['./maleshoes.component.css']
})
export class MaleshoesComponent implements OnInit {
  maleShoesData:any
  constructor(private activatedRoute:ActivatedRoute,private owlService:OwlService,private accountService:AccountService,private messageService:MessageService,private router:Router) {
    this.maleShoesData = activatedRoute.snapshot.data['maleShoesData']
   }

  ngOnInit(): void {
  }

  addToCart(id:any)
  {
    this.accountService.addToCart(id).subscribe(res=>{
        this.messageService.showSuccessMessage("product added to the cart sucessfully")
        this.router.navigate(['/accounts/cart'])
    },err=>{

      this.router.navigate(['/auth/login'])
    })  
  }

  
  customOptions: OwlOptions = this.owlService.owlOption;

}
