import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../../core/models';
import { ApiService } from '../../core/services';
import { environment } from '../../../environments/environment'
@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  @Input() limit: number;
   jobs:any;
  constructor(private apiService: ApiService) { 
    this.apiService.get('index').subscribe(data => {
      console.log(data)
      this.jobs = data.jobs;
      // for(let job of data.jobs){
      // this.jobs.push(job);
      // }
      // console.log(this.jobs);
      // Object.keys(this.job).forEach(e => {
      //   console.log(e);

      // })
      // console.log(typeof this.job)
    });
  }

  ngOnInit() {
 
  }


}
