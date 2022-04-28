import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { NotifyService } from './../../../services/notify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
 template: ''
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private notify: NotifyService, private router: Router) { }

  ngOnInit(): void {
    this.authService.logout()
    this.notify.success('התנתקת בהצלחה')
    this.router.navigateByUrl('/home')
  }

}
