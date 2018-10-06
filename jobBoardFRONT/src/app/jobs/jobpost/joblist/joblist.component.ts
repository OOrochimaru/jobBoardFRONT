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
      this.username = user.username;
      this.userid = user._id;
      if (user.role === 'employer') {
        this.jobService.getEmployerJobs(user._id).subscribe(postedJobs => {
          this.jobs = postedJobs.jobs;
          console.log(this.jobs);
        })
      }

      if (user.role === 'jobseeker') {
        console.log(user._id+"''''''''''''''''''''");
        this.jobService.getUserJobs(user._id).subscribe(appliedJobs => {
          this.jobs = appliedJobs.jobs;
          console.log(this.jobs);
        })
      }
      
      console.log(user);
      console.log("***************************");


      // console.log(this.userid);
      // this.jobService.getUserJobs(this.userid).subscribe(data => {
      //   console.log(data);
      //   this.jobs = data.jobs;
      // });
    });
  }


}
