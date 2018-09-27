import { Injectable } from '@angular/core';
import { ReplaySubject, Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private currentUserSubject = new BehaviorSubject<User>({} as User);
    private currentUser = this.currentUserSubject.asObservable()
    .pipe(distinctUntilChanged());

   isAuthenticationSubject = new ReplaySubject<boolean>(1);
   isAuthenticated = this.isAuthenticationSubject.asObservable();
  constructor(private apiService: ApiService, private jwtService: JwtService) { 
  }

  setAuth(user: User){
    //save jwt send by the server to the local storage
      this.jwtService.setToken(user.token);

    //save user user data in observable
    this.currentUserSubject.next(user);

    //set isAuthentication to true
    this.isAuthenticationSubject.next(true);


    this.isAuthenticationSubject.next(true);
  }
  purgeAuth(){
    this.isAuthenticationSubject.next(false);
  }
  attemptAuth(authType , userCredentials): Observable<User>{
    const route= (authType  === 'register') ? '/register':'/login';

    return this.apiService.post('/users'+ route, {user: userCredentials})
            .pipe(map(data => {
              this.setAuth(data.user);
              return data;
            }))

  }

}
