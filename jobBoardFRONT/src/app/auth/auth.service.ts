import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable} from 'rxjs';
import { take, map } from 'rxjs/operators';
import { UserService } from '../core/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private route: Router, private userService: UserService) { }

   canActivate( route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot):Observable<boolean> {
        return this.userService.isAuthenticated.pipe(take(1), map(isAuth => isAuth))
      }
}
