import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/service/message.service';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders:any
  constructor(private adminService:AdminService,private messageService:MessageService) { }

  ngOnInit(): void {

    this.adminService.getOrders().subscribe(res=>{
      this.orders=res
    },err=>{
      console.log(err)
    })
  }

  deleteOrder(id:any)
  {
    const c = confirm(`are you sure you want to delete order with id ${id} ?`)
    if(c)
    {
      this.adminService.deleteOrders(id).subscribe(res=>{
        this.messageService.showSuccessMessage("order deleted sucessfully")
        this.adminService.getOrders().subscribe(res=>{
          this.orders=res
        },err=>{
          console.log(err)
        })
      })
    }
  }

}
