import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { AccountService } from 'src/app/accounts/service/account.service';
import { MessageService } from 'src/app/service/message.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  productDetails:any
  constructor(private activatedRoute:ActivatedRoute,private productService:ProductsService,private accountService:AccountService,private messageService:MessageService,private router:Router) {
    
    this.productDetails = activatedRoute.snapshot.data['productDetails']

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

  ngOnInit(): void {
  }

}
