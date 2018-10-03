import { Component, OnInit } from '@angular/core';
import { User, Job } from '../../../core/models';
import { UserService } from '../../../core/services';
import { JobService } from '../../../core/services/job.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jobpreview',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit  {

  currentUser: User;
  username: string;
  userid: string;
  jobs: Job[];

  constructor(private userService: UserService,
    private jobService: JobService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.userService.currentUser.subscribe((user) => {
      this.currentUser = user;
      this.username = this.currentUser.username;
      this.userid = this.currentUser.userid;
      this.jobService.getUserJobs(this.userid).subscribe(data => {
        console.log(data);
        this.jobs = data.jobs;
      });
    });
  }


}
