import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifyService } from './../../../services/notify.service';
import { AuthService } from './../../../services/auth.service';
import { CredentialsModel } from './../../../models/credentials.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // credentials: CredentialsModel
  credentials = new CredentialsModel()

  authForm: FormGroup
  usernameInput: FormControl
  passwordInput: FormControl 

  constructor(private authService : AuthService, private notify: NotifyService, private router: Router) { }


  ngOnInit(): void {
  this.usernameInput = new FormControl('', [Validators.required, Validators.minLength(3)])
  this.passwordInput = new FormControl('', [Validators.required, Validators.minLength(3)]) 
  this.authForm = new FormGroup({
    usernameBox: this.usernameInput,
    passwordBox: this.passwordInput
  })

  }


 async submit() {
   debugger
   try {
     console.log(this.credentials)
     this.credentials.password = this.passwordInput.value
     this.credentials.username = this.usernameInput.value 





     await this.authService.login(this.credentials)
     this.notify.success('התחברת בהצלחה')
     this.router.navigateByUrl('/home')
   } catch (err: any) {
     this.notify.error(err)
   }
 }
}
