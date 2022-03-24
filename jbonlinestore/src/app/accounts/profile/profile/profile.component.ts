import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/admin/service/admin.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  profileForm:FormGroup
  updateable=false;
  dis=true;
  profileBtn="Add profile"
  constructor(private fb:FormBuilder,private adminService:AdminService,private messageService:MessageService) {
    this.profileForm = fb.group({
      fullName:['',[Validators.required,Validators.maxLength(30)]],
      address:['',[Validators.required,Validators.maxLength(25)]],
      phone:['',[Validators.required,Validators.pattern("[0-9 ]{10}")]]
    })
   }

   get profileControls()
   {
     return this.profileForm.controls
   }

   profileFormSubmission()
   {
     if(this.profileForm.valid)
     {
       if(this.updateable)
       {
          this.adminService.editUserDetails(this.profileForm.value).subscribe(res=>{
            this.messageService.showSuccessMessage("Profile Updated Sucessfully")
          },err=>{
            console.log(err)
          })
       }
       else{
          this.adminService.addUserDetails(this.profileForm.value).subscribe(res=>{
            this.messageService.showSuccessMessage("Profile added sucessfully")
            this.updateable=true;
            this.profileBtn="Update profile"
            this.dis = false;
          })
       }
     }
   }

  ngOnInit(): void {
    this.adminService.getUserDetails().subscribe(res=>{
        if(res.length==1)
        {
          // this.profileForm.controls['user'].setValue(res[0].user)
          this.profileForm.controls['fullName'].setValue(res[0].fullName)
          this.profileForm.controls['address'].setValue(res[0].address)
          this.profileForm.controls['phone'].setValue(res[0].phone)
          this.updateable=true;
          this.profileBtn="Update profile"
          this.dis = false;
        }
      
    })
  }

}
