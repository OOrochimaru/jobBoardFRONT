import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job, User } from '../../../../../core/models';
import { JobService } from '../../../../../core/services/job.service';
import { UserService, ApiService } from '../../../../../core/services';
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
  applied = false;

  currentLoggedInUser: User;

  constructor(private route: ActivatedRoute,
    private jobService: JobService,
    private router: Router,
    private api: ApiService,

    private userService: UserService) { }

  ngOnInit() {

    this.userService.currentUser.subscribe(user => {
      this.currentLoggedInUser = user;
      console.log(this.currentLoggedInUser);
    })
    this.route.data.subscribe((data) => {
      this.job = data.jobs.job;
      this.publisher = data.jobs.job.jobPublisher;

    });
  }

  clicked(){
    this.api.get('index/applyForJob').subscribe(data => {
      console.log(data)
    }, (error)=>{
      console.log(error)
    });
  }

  applyForJob(){
    
    this.userService.isAuthenticated.subscribe(auth => {
      console.log(auth);
      if (auth) {

        this.jobService.applyForJob(this.job._id)
        .subscribe(data => {
          console.log(data)
        })
        this.applied = true;
        console.log(this.applied);
      }else{
        this.router.navigateByUrl('/login');
      }
    });
  }

}


