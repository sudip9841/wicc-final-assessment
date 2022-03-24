import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private toastrService:ToastrService) { }

  showErrorMessage(message:string)
  {
    this.toastrService.error(message);
  }

  showSuccessMessage(message:string)
  {
    this.toastrService.success(message)
  }

}
