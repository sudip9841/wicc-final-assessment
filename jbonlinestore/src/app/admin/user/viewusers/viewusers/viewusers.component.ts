import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/service/admin.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {

  users:any
  constructor(private adminService:AdminService, private messageService:MessageService, private router:Router) { }

  ngOnInit(): void {
    this.adminService.getUsers().subscribe(res=>{
      this.users=res
    })
  }

  deleteUser(id:any)
  {
    let cf = confirm(`are you sure you want to delete user with id ${id} ?`)
    if(cf)
    {
    this.adminService.deleteUser(id).subscribe(res=>{
      this.messageService.showSuccessMessage("User deleted sucessfully")
      this.adminService.getUsers().subscribe(res=>{
        this.users=res
      })
    })
  }

  }

}
