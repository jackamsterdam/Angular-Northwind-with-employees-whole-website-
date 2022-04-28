import { Router } from '@angular/router';
import { NotifyService } from './../../../services/notify.service';
import { AuthService } from './../../../services/auth.service';
import { CredentialsModel } from './../../../models/credentials.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-template-form',
  templateUrl: './login-template-form.component.html',
  styleUrls: ['./login-template-form.component.css']
})
export class LoginTemplateFormComponent  {

  credentials = new CredentialsModel()

  constructor(private authService : AuthService, private notify: NotifyService, private router: Router) { }

 async submit() {
   try {
     await this.authService.login(this.credentials)
     this.notify.success('התחברת בהצלחה')
     this.router.navigateByUrl('/home')
   } catch (err: any) {
     this.notify.error(err)
   }
 }

}
