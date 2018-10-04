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

  save(path: string, body): Observable<Job>{

    // todo:
    // check if the job is to be updated or new posted
    console.log("*******job-service-save******"+path);
    return this.apiService.post('index/'+path+'/addjob', {job: body})
    .pipe(map(data => data.job));
  }
  getUserJobs(path: string){
    // console.log(path)
    return this.apiService.get('index/'+path+'/getUserJobs')
    // .pipe(map(data => <Job[]>data ));
    //.pipe(map(data =>console.log(data)));
  }
  getJobPreview(path: string){
    return this.apiService.get('index/'+path+'/getJobPreview');
  }
  getUser(path: string){
    console.log(path);
    return this.apiService.get('index/'+path+'/getUser');
  }
  getSearchJobs(path: string, body){
      return this.apiService.post('index/'+path, {query: body});
  }

}