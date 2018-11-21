import { Injectable, Injector} from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'; 
import { JwtService } from '../services';
@Injectable()
export class HttptokenInterceptor implements HttpInterceptor{

  constructor(private jwtService: JwtService) { 

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const headersConfig = {
          'Content-Type' : 'application/json',
          'Accept' : 'application/json'
        } 

        //getting token from jwtservice

        const token = this.jwtService.getToken();

        if (token) {
              //replace the original headers with
              //new authorization header
              headersConfig['Authorization'] = `Token ${token}`;
        }
        //clone the request and set the new header here 
        const request = req.clone({ setHeaders: headersConfig});
        return next.handle(request);
  }
}
