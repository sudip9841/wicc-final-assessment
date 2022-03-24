import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/service/admin.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  imageSrc:any
  productForm:FormGroup
  constructor(private fb:FormBuilder,private adminService:AdminService,private messageService:MessageService,private router:Router) {
    this.productForm = fb.group({
      title:['',[Validators.required,Validators.maxLength(100)]],
      price:['',[Validators.required, Validators.pattern("^[1-9]+[0-9]*$")]],
      discription:['',[Validators.required,Validators.maxLength(250)]],
      gender:['male',[Validators.required]],
      brand:['',[Validators.required,Validators.maxLength(50)]],
      category:['',[Validators.required,Validators.maxLength(50)]],
    })
   }

   get productControls()
   {
     return this.productForm.controls;
   }

  ngOnInit(): void {
  }

  
  submitProductForm()
  {
    if(this.productForm.valid)
    {
      console.log(this.productForm.value)
      this.adminService.addProduct(this.productForm.value).subscribe(res=>{
        this.messageService.showSuccessMessage("product added sucessfully")
        this.productForm.reset()
        this.router.navigate(['/admin/product/viewproducts'])
      },err=>{
        console.log(err)
      })
    }
  }

}
