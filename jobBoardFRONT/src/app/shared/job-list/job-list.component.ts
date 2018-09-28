import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../../core/models';
import { ApiService } from '../../core/services';
import { environment } from '../../../environments/environment'
import { validateConfig } from '@angular/router/src/config';
@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  @Input() limit: number;
   jobs;
   totalPages: Array<number> = [1];
   currentPage = 1;
  constructor(private apiService: ApiService) { 
    this.apiService.get('index').subscribe(data => {
      console.log(data)
      console.log(data.jobs.length)
      this.jobs = data.jobs;
     
      this.totalPages = Array.from(new Array(
        Math.ceil(6)), (val, index) => index + 1);
      // new Array(1,2,3,4,5,6); 
      // data.jobs.length;
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
  setToPage(pageNumber: number){
  this.currentPage = pageNumber;
  }


}
