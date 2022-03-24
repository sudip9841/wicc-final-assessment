import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('pass') pass !: ElementRef

  registerForm: FormGroup

  constructor(private fb: FormBuilder, private authService: AuthService, private messageService: MessageService) {
    this.registerForm = fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  get rfControls() {
    return this.registerForm.controls;
  }

  registerFormSubmit() {
    if (this.registerForm.valid) {
      this.authService.userRegister(this.registerForm.value).subscribe(res => {
        this.messageService.showSuccessMessage("user registered sucessfully")
        this.registerForm.reset()

      }, err => {
        const error = err.error
        for (let e in error) {
          error[e].forEach((error: any) => {
            this.messageService.showErrorMessage(error)
          })
        }
      })
    }
  }

  hideShowPass() {
    // console.log(this.pass.nativeElement.type)
    let type = this.pass.nativeElement.type
    if (type === 'password') {
      this.pass.nativeElement.type = 'text'
    }
    else {
      this.pass.nativeElement.type = 'password'
    }


  }

}
