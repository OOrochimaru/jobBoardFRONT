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
  applied = true;

  currentLoggedInUser: User;

  constructor(private route: ActivatedRoute,
    private jobService: JobService,
    private router: Router,
    private api: ApiService,

    private userService: UserService) { }

  ngOnInit() {

    this.userService.currentUser.subscribe(user => {
      this.currentLoggedInUser = user;
      if (this.currentLoggedInUser.role === "jobseeker") {
        this.applied = false;
      }
      console.log(this.currentLoggedInUser);

    })
    this.route.data.subscribe((data) => {
      this.job = data.jobs.job;
      this.publisher = data.jobs.job.jobPublisher;

    });
  }


  checkApply(jobId){

   

    var applieJobs = this.currentLoggedInUser.appliedJobs;
    console.log('++++++++++++++++++++',jobId);
    console.log('---------------------',applieJobs);


    var response = applieJobs.includes(jobId); 

    console.log('response--------------',response);

    if(response){
      return false;
    }else{
      return true;
    }

    
    
  }


  applyForJob(){
    
    this.userService.isAuthenticated.subscribe(auth => {
      console.log(auth);
      if (auth) {
        console.log("not user")
        this.jobService.applyForJob(this.job._id)
        .subscribe(data => {
          console.log('****************',data);
         // this.applieJobs = data
        })
        this.jobService.getAppliedDetail(this.job._id).subscribe(data =>{
          console.log('+++++++++++++++++',data);
         
        })

        this.applied = true;
      }
    });
  }

}


