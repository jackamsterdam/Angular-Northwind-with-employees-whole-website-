

import { Router } from '@angular/router';
import { NotifyService } from './../../../services/notify.service';
import { AuthService } from './../../../services/auth.service';
import { UserModel } from './../../../models/user.model';
import { Component} from '@angular/core';

@Component({
  selector: 'app-register-template-form',
  templateUrl: './register-template-form.component.html',
  styleUrls: ['./register-template-form.component.css']
})

export class RegisterTemplateFormComponent{
  user =  new UserModel()

  constructor(private authService: AuthService, private router: Router, private notify: NotifyService) { }

  async submit() {
    try {
      
     await this.authService.register(this.user)
     this.notify.success('אתה עכשיו רשום')
     this.router.navigateByUrl('/home')

    } catch (err: any) {
      this.notify.error(err)
    }
  }

 

}
