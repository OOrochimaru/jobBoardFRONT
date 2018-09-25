import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isAuthenticationSubject = new ReplaySubject<boolean>(1);
  isAuthenticated = this.isAuthenticationSubject.asObservable();
  constructor() {
    this.isAuthenticationSubject.next(false);
  }

  setAuth() {
    this.isAuthenticationSubject.next(true);
  }
  purgeAuth() {
    this.isAuthenticationSubject.next(false);
  }

}
