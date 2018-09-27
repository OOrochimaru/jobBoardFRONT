import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  setToken( token: string){
    window.localStorage['jwtToken'] = token;
  }

  getToken(){
    return window.localStorage['jwtToken'];
  }
  destroyToken(){
    window.localStorage.removeItem['jwtToken'];
  }
}
