import { Injectable } from '@angular/core';
import { ReplaySubject, Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { JwtService } from './jwt.service';
import { User } from '../models/user.model';
import { Job } from '../models';

@Injectable()
export class JobService {

  constructor(private apiService: ApiService){}

  //adding jobs
  save(path: string, body): Observable<Job>{

    // todo:
    // check if the job is to be updated or new posted
    console.log("*******job-service-save******"+path);
    return this.apiService.post('index/'+path+'/addjob', {job: body})
    .pipe(map(data => data.job));
  }

  //jobs of particular jobs
  getUserJobs(path: string){
    // console.log(path)
    return this.apiService.get('index/'+path+'/getUserJobs')
    // .pipe(map(data => <Job[]>data ));
    //.pipe(map(data =>console.log(data)));
  }

  //job data for job previewing 
  getJobPreview(path: string){
    return this.apiService.get('index/'+path+'/getJobPreview');
  }
  
  //for billing and profile
  getUser(path: string){
    return this.apiService.get('index/'+path+'/getUserDetails').pipe(map(data => data));
  }


  //use resolver
  // //user data for job previewing
  // getUserJobPreview(path: string){
  //   return this.apiService.get('index/'+path+'/getUser').pipe(map(data => data));
  // }


  //search multiple search
  getSearchJobs(path: string, body){
      return this.apiService.post('index/'+path, {query: body});
  }

}
