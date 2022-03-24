import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin/service/admin.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-editorders',
  templateUrl: './editorders.component.html',
  styleUrls: ['./editorders.component.css']
})
export class EditordersComponent implements OnInit {
  orderForm:FormGroup
  constructor(private fb:FormBuilder,private router:Router, private messageService:MessageService,private activatedRoute:ActivatedRoute,private adminService:AdminService) {
    this.orderForm = fb.group({
      id:[''],
      user:[''],
      product:[''],
      quantity:[''],
      order_date:[''],
      status:['pending']
    })
   }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.adminService.getOneOrder(id).subscribe(res=>{
      this.orderForm.controls['id'].setValue(res.id)
      this.orderForm.controls['user'].setValue(res.user)
      this.orderForm.controls['product'].setValue(res.product)
      this.orderForm.controls['quantity'].setValue(res.quantity)
      this.orderForm.controls['order_date'].setValue(res.order_date)
      this.orderForm.controls['status'].setValue(res.status)

    },err=>{
      this.router.navigate(['/admin/orders'])
    })
  }

  orderFormSubmit()
  {
    if(this.orderForm.valid)
    {
      let data={
        status:this.orderForm.value['status'] 
      }
      const id = this.orderForm.value['id']

      this.adminService.updateOrder(id,data).subscribe(res=>{
        this.messageService.showSuccessMessage("Order updated sucessfully")
        this.router.navigate(['/admin/orders'])
      })
    }
  }

}
