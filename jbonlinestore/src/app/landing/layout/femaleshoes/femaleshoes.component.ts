import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AccountService } from 'src/app/accounts/service/account.service';
import { MessageService } from 'src/app/service/message.service';
import { OwlService } from 'src/app/service/owl.service';

@Component({
  selector: 'app-femaleshoes',
  templateUrl: './femaleshoes.component.html',
  styleUrls: ['./femaleshoes.component.css']
})
export class FemaleshoesComponent implements OnInit {
  femaleShoesData:any
  constructor(private activatedRoute:ActivatedRoute,private owlService:OwlService, private accountService:AccountService,private messageService:MessageService,private router:Router) {
    this.femaleShoesData = this.activatedRoute.snapshot.data['femaleShoesData']
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
