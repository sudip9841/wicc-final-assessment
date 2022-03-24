import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('passw') pass !: ElementRef

  loginForm:FormGroup
  constructor(private fb:FormBuilder,private authService:AuthService,private messageService:MessageService,private router:Router) {
    this.loginForm  = fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  get lfControls()
  {
    return this.loginForm.controls;
  }

  loginFormSubmit()
  {
    if(this.loginForm.valid)
    {
      this.authService.userLogin(this.loginForm.value).subscribe(res=>{
        this.authService.saveToken(res.token)
        this.messageService.showSuccessMessage("user logged in sucessfully")
        this.loginForm.reset()
        this.router.navigate(['/'])

      },err=>{
        let errors = err.error
        for(let e in errors )
        {
          errors[e].forEach((eErrors:any)=>{
            this.messageService.showErrorMessage(eErrors);
          })
        }
      })
    }

  }

  hideShowPass()
  {
    // console.log(this.pass.nativeElement.type)
    let type = this.pass.nativeElement.type
    if(type==='password')
    {
      this.pass.nativeElement.type='text'
    }
    else{
      this.pass.nativeElement.type='password'
    }
  }



}
