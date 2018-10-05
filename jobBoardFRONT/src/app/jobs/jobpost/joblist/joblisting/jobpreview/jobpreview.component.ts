import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job, User } from '../../../../../core/models';
import { JobService } from '../../../../../core/services/job.service';
import { UserService } from '../../../../../core/services';
import { map, concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-jobpreview',
  templateUrl: './jobpreview.component.html',
  styleUrls: ['./jobpreview.component.css']
})
export class JobpreviewComponent implements OnInit {

  jobId: string;
  job: Job;
  jobPublisherId: string;
  publisher: User;
  constructor(private route: ActivatedRoute,
    private jobService: JobService,
    private userService: UserService) { }

  ngOnInit() {
    this.route.data.subscribe((data) =>
      {
        this.job = data.jobs.job;
        this.publisher = data.jobs.job.jobPublisher;

      })}
    
    }
    // this.route.params.subscribe(param => {
    //   this.jobId = param.jobId;
    // });
    // this.jobService.getJobPreview(this.jobId).subscribe(jobdata => {
    //   console.log(jobdata);
      
    //   this.job = jobdata.job;
    //   this.publisher = jobdata.job.jobPublisher;
    //   console.log(this.publisher.username);
    
    // });
   
   
