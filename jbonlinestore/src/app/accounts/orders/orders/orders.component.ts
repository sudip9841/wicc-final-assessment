import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/service/admin.service';
import { MessageService } from 'src/app/service/message.service';
import { ProductsService } from 'src/app/service/products.service';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders:any
  constructor(private productService:ProductsService,private adminService:AdminService, private messageService:MessageService, private router:Router,private accountService:AccountService) { }

  ngOnInit(): void {
    this.productService.getProductOrder().subscribe(res=>{
      this.orders = res
    },err=>{
      console.log(err)
    })
  }

  deleteOrder(id:any)
  {
    const c = confirm(`are you sure you want to cancel this order with id ${id} ?`)
    if(c)
    {
      this.accountService.deleteOrder(id).subscribe(res=>{
        this.messageService.showSuccessMessage("order canceled sucessfully")
        this.reloadCurrentRoute()
      })
    }
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}

}
