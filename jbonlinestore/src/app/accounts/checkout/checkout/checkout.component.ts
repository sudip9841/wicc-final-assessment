import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/service/admin.service';
import { MessageService } from 'src/app/service/message.service';
import { ProductsService } from 'src/app/service/products.service';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  profileForm: FormGroup
  constructor(private fb: FormBuilder, private accountService: AccountService, private adminService: AdminService, private messageService: MessageService, private router: Router, private productService: ProductsService) {
    this.profileForm = fb.group({
      fullName: ['', [Validators.required, Validators.maxLength(30)]],
      address: ['', [Validators.required, Validators.maxLength(25)]],
      phone: ['', [Validators.required, Validators.pattern("[0-9 ]{10}")]]
    })
  }

  get profileControls() {
    return this.profileForm.controls
  }

  ngOnInit(): void {
  }
  profileFormSubmission() {
    if (this.profileForm.valid) {
      // this.messageService.showSuccessMessage("order places sucessfully")
      // this.router.navigate(['/accounts/orders'])
      this.accountService.getCart().subscribe(res => {
        const result = res
        if(result.length==0)
        {
          this.messageService.showErrorMessage("there is no items in you cart")
          this.router.navigate(['/'])
        }
        for (let r of result) {
          this.productService.getProduct(r.product).subscribe(res => {
            console.log(res[0].id)
            this.accountService.placeOrder(res[0].id).subscribe(res => {
              this.accountService.deleteCart(r.id).subscribe(res => {
              })
            }, err => {

            })
          })
          this.messageService.showSuccessMessage("product ordered sucessfully")
          this.router.navigate(['/accounts/orders'])
        }

      })

    }
  }

}
