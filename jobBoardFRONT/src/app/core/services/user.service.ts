import { Injectable } from '@angular/core';
import { ReplaySubject, Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { JwtService } from './jwt.service';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable()
    .pipe(distinctUntilChanged());

  private isAuthenticationSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticationSubject.asObservable();
  constructor(private apiService: ApiService,
    private jwtService: JwtService) {
  }

  //populating when the app first starts 
  populate(){
    if (this.jwtService.getToken()) {
      this.apiService.get('index/user')
      .subscribe(data => {
        this.setAuth(data.user)
      }, error => {
        this.purgeAuth();
      })
    }else{
      this.purgeAuth();
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
  attemptLogin(authType, userCredentials): Observable<User> {
    return this.apiService.post('index/'+authType, { user: userCredentials })
      .pipe(map(data => {
        this.setAuth(data.user);
        return data;
      }));
  }
  attemptSignup(authType, userCredentials): Observable<User>{
    return this.apiService.post('index/'+authType, {user: userCredentials});
  }

  checkUser(email: string){
      console.log(email);
      return this.apiService.post('index/checkuser', {user: email}).pipe(map(data => {
        return data;
      }))
  }
}
