import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin/service/admin.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  productForm:FormGroup
  constructor(private fb:FormBuilder,private adminService:AdminService,private messageService:MessageService,private router:Router,private activatedRoute:ActivatedRoute) { 
    this.productForm = fb.group({
      id:[''],
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
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.adminService.getOneProduct(id).subscribe(res=>{
      this.productForm.controls['id'].setValue(res.id)
      this.productForm.controls['title'].setValue(res.title)
      this.productForm.controls['price'].setValue(res.price)
      this.productForm.controls['discription'].setValue(res.discription)
      this.productForm.controls['gender'].setValue(res.gender)
      this.productForm.controls['brand'].setValue(res.brand)
      this.productForm.controls['category'].setValue(res.category)

    },err=>{
      this.router.navigate(['/admin/product/viewproducts'])
    })
  }

  submitProductForm(){
    if(this.productForm.valid)
    {
      let data={
        title:this.productForm.value['title'],
        price:this.productForm.value['price'],
        discription:this.productForm.value['discription'],
        gender:this.productForm.value['gender'],
        brand:this.productForm.value['brand'],
        category:this.productForm.value['category']
      }
      this.adminService.updateProduct(this.productForm.value['id'],data).subscribe(res=>{
        this.messageService.showSuccessMessage("Product updated sucessfully")
        this.productForm.reset()
        this.router.navigate(['/admin/product/viewproducts'])
      })
    }
  }

}
