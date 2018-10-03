import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job, User } from '../../../../../core/models';
import { JobService } from '../../../../../core/services/job.service';
import { UserService } from '../../../../../core/services';

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
    this.route.params.subscribe(param => {
      this.jobId = param.jobId;
    });
    this.jobService.getJobPreview(this.jobId).subscribe(data => {
      this.job = data.job;
      console.log(this.job);
      this.jobPublisherId = data.job.jobPublisher;
      console.log(this.jobPublisherId);
      this.jobService.getUser(this.jobPublisherId).subscribe(data => {
        this.publisher = data.user;
        console.log(this.publisher);
      })
    });
   
   }

}
