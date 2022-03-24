import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/accounts/service/account.service';
import { MessageService } from 'src/app/service/message.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {
  allProd:any
  title=""
  constructor(private productService:ProductsService,private router:Router, private accountService:AccountService, private messageService:MessageService) { }
  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(res=>{
      this.allProd = res;
    })
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

}
