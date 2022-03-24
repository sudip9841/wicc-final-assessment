import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../service/account.service';
import { ProductsService } from 'src/app/service/products.service';
import { MessageService } from 'src/app/service/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  item = 0
  total = 0
  cartItems: any = []
  notEmpty = false;
  constructor(private accountService: AccountService, private productService: ProductsService, private messageService: MessageService, private router:Router) { }

  ngOnInit(): void {
    this.accountService.getCart().subscribe(res => {
      const result = res
      for (let r of result) {
        this.productService.getProduct(r.product).subscribe(res => {
          res[0]['cart_id'] = r.id
          this.cartItems.push(res[0])
          this.item = this.item+1;
          this.total = this.total+res[0].price
          this.notEmpty=true;
        })
      }

    })
    // concat(this.accountService.getCart(),this.accountService.getCart()).subscribe(res=>{
    //   console.log(res)
    // })
  }

  deleteCart(id: any) {
    const c = confirm("Are you sure ? you want to remove this item from the cart ?")
    if (c) {
      this.accountService.deleteCart(id).subscribe(res => {
        this.messageService.showSuccessMessage("Cart item deleted sucessfully")
        this.reloadCurrentRoute();
      })
    }
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}

  decrease() {
    if (this.item > 1) {
      this.item = this.item - 1;
      this.total = this.total - 3000
    }

  }

  increase() {
    if (this.item < 5) {
      this.item = this.item + 1
      this.total = this.total + 3000
    }
  }





}
