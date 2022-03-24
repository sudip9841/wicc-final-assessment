import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/service/admin.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  products:any
  constructor(private adminService:AdminService,private messageService:MessageService) { }

  ngOnInit(): void {
    this.adminService.getAllPorduct().subscribe(res=>{
      this.products = res
    },err=>{
      console.log(err)
    })
  }

  deleteProduct(id:any)
  {
    const c = confirm(`Do you really want to delete the product haaving id ${id} ?`)
    if(c)
    {
      this.adminService.deleteProduct(id).subscribe(res=>{
        this.messageService.showSuccessMessage("Product deleted sucessfully")
        this.adminService.getAllPorduct().subscribe(res=>{
          this.products = res
        },err=>{
          console.log(err)
        })

      })
    }
  }

}
