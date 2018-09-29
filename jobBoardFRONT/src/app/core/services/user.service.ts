import { Injectable } from '@angular/core';
import { ReplaySubject, Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { JwtService } from './jwt.service';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  private currentUser = this.currentUserSubject.asObservable()
    .pipe(distinctUntilChanged());

  isAuthenticationSubject = new ReplaySubject<boolean>(1);
  isAuthenticated = this.isAuthenticationSubject.asObservable();
  constructor(private apiService: ApiService,
    private jwtService: JwtService) {
  }

  //populating when the app first starts 
  populate(){
    if (this.jwtService.getToken) {
      this.apiService.get('index/user')
      .subscribe(data => {
        this.setAuth(data.user)
      }, error => {
        this.purgeAuth();
      })
    }
  }

  setAuth(user: User) {
    //save jwt send by the server to the local storage
    this.jwtService.setToken(user.token);

    //save user user data in observable
    this.currentUserSubject.next(user);

    //set isAuthentication to true
    this.isAuthenticationSubject.next(true);
  }
  purgeAuth() {
      this.jwtService.destroyToken();
      this.currentUserSubject.next({} as User);
      this.isAuthenticationSubject.next(false);
  }
  attemptAuth(authType, userCredentials): Observable<User> {
    const route = (authType === 'register') ? '/register' : '/login';
    console.log(route);
    return this.apiService.post('index'+route, { user: userCredentials })
      .pipe(map(data => {
        console.log(data);
        this.setAuth(data.user);
        return data;
      }));
  }

  checkUser(email: string){
      console.log(email);
      return this.apiService.post('index/checkuser', {user: email}).pipe(map(data => {
        console.log()
        console.log(data);
        return data;
      }))
  }
}
