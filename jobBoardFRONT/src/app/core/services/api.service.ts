import { Injectable } from '@angular/core';
import { ReplaySubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { JwtService } from './jwt.service';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient, private jwtService: JwtService) {}

//formatting errors
private formattingErrors(error: any){
    return throwError(error.error);
}
get(path: string, params: HttpParams = new HttpParams()): Observable<any>{
    return this.http.get(`${environment.api_url}${path}`, {params})
    .pipe(catchError(this.formattingErrors));
}

post(path: string, body: Object = {}): Observable<any>{
    // console.log(body);
    return this.http.post(`${environment.api_url}${path}`, JSON.stringify(body))
    .pipe(catchError(this.formattingErrors));
}

}
