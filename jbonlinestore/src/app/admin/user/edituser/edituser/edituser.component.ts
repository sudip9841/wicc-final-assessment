import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin/service/admin.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  editForm:FormGroup
  constructor(private fb:FormBuilder, private adminService:AdminService,private messageService:MessageService,private activatedRoute:ActivatedRoute,private router:Router) {
    this.editForm = fb.group({
      id:[''],
      username:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]]
    })
   }

   get rfControls()
  {
    return this.editForm.controls;
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.adminService.getSingleUser(id).subscribe(res=>{
      this.editForm.controls['id'].setValue(res.id)
      this.editForm.controls['username'].setValue(res.username)
      this.editForm.controls['email'].setValue(res.email)
    },err=>{
      this.router.navigate(['/admin/user/viewusers'])
    })
    

  }
  editFormSubmit(){
    if(this.editForm.valid)
    {
      let data={
        username:this.editForm.value['username'],
        email:this.editForm.value['email']
      }
      this.adminService.updateUser(this.editForm.value['id'],data).subscribe(res=>{
        this.messageService.showSuccessMessage("user updated sucessfully")
        this.editForm.reset()
        this.router.navigate(['/admin/user/viewusers'])
      })
    }
  }

}
