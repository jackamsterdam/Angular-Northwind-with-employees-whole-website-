import { UserModel } from './../../../models/user.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import store from 'src/app/Redux/store';
import { Unsubscribe } from 'redux';

@Component({
  selector: 'app-auth-menu',
  templateUrl: './auth-menu.component.html',
  styleUrls: ['./auth-menu.component.css']
})
export class AuthMenuComponent implements OnInit, OnDestroy {
  user: UserModel
  private unsubscribe: Unsubscribe

  constructor() { }
 
  ngOnInit(): void {
    this.user = store.getState().authState.user
// dont forget () => in subscribe 
    this.unsubscribe = store.subscribe(() => {
      this.user = store.getState().authState.user
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe()  //if we leave the component so wont לזלול performance 
  }


}
