import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifyService } from './../../../services/notify.service';
import { AuthService } from './../../../services/auth.service';
import { UserModel } from './../../../models/user.model';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // user: UserModel 
  user = new UserModel()

  authForm: FormGroup
  firstNameInput : FormControl
  lastNameInput: FormControl
  usernameInput: FormControl
  passwordInput: FormControl

  constructor(private authService: AuthService, private router: Router, private notify: NotifyService) { }


  ngOnInit(): void {
 this.firstNameInput = new FormControl('', [Validators.required, Validators.minLength(3)])
 this.lastNameInput = new FormControl('', [Validators.required, Validators.minLength(3)])
 this.usernameInput = new FormControl('', [Validators.required, Validators.minLength(3)]) 
 this.passwordInput = new FormControl('', [Validators.required, Validators.minLength(3)]) 

 this.authForm = new FormGroup({
   firstNameBox: this.firstNameInput,
   lastNameBox : this.lastNameInput,
   usernameBox : this.usernameInput,
   passwordBox : this.passwordInput
 })
  }

  
  async submit() {
    try {

      this.user.firstName = this.firstNameInput.value 
      this.user.lastName = this.lastNameInput.value 
      this.user.username = this.usernameInput.value 
      this.user.password = this.passwordInput.value 
      
     await this.authService.register(this.user)
     this.notify.success('אתה עכשיו רשום')
     this.router.navigateByUrl('/home')

    } catch (err: any) {
      this.notify.error(err)
    }
  }

 

}
