import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { JobService } from '../../../../core/services/job.service';
import { UserService } from '../../../../core/services';
import { User, Job } from '../../../../core/models';

@Component({
  selector: 'app-joblisting',
  templateUrl: './joblisting.component.html',
  styleUrls: ['./joblisting.component.css']
})
export class JobListingComponent implements OnInit {

  username: string;
  currentUser : User;
  constructor(private userService: UserService) { }
  @Input() jobs: Job[];
  ngOnInit() {
    this.userService.currentUser.subscribe(user => {
      this.currentUser = user;
      this.username = user.username;
    })
    console.log(this.jobs);
  }

  // currentUser: User;
  // username: string;
  // userid: string;
  // jobs: Job[];

  // constructor(private userService: UserService,
  //   private jobService: JobService,
  //   private route: ActivatedRoute) {}

  // ngOnInit() {
  //   this.userService.currentUser.subscribe((user) => {
  //     this.currentUser = user;
  //     this.username = this.currentUser.username;
  //     this.userid = this.currentUser.userid;

  //     console.log(this.userid);
  //     this.jobService.get(this.userid).subscribe(data => 
  //       // console.log(data);
  //       this.jobs = data
  //       // console.log(this.jobs);
  //     // }
  //     // console.log(data)
  //       // console.log(typeof data+"type defined")

  //     );
  //     console.log(this.jobs+"**********");


  //     // this.route.params.subscribe(param => {
  //     //   console.log(param.username)
  //     // })
  //   });
  // }


}
