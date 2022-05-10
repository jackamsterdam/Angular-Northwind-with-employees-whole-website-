import { NotifyService } from 'src/app/services/notify.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import store from '../Redux/store';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private notify: NotifyService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

  //     if (store.getState().authState.user.role === Role.admin) {

  //       return true;  
  //     }
  // this.notify.error('You are not Admin')
  // this.router.navigateByUrl('/login')
  // return false
  // }
  return true  // WE dont have admin lol yet 
  
}
}