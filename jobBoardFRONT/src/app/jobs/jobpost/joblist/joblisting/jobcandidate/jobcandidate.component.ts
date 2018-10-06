import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../../../../../core/services/job.service';

@Component({
  selector: 'app-jobcandidate',
  templateUrl: './jobcandidate.component.html',
  styleUrls: ['./jobcandidate.component.css']
})
export class JobcandidateComponent implements OnInit {

  constructor(private route: ActivatedRoute,
  private jobService: JobService) { }
  jobApplicantsList : Object[];

  ngOnInit() {
    this.route.params.subscribe(data => {
      console.log(data.jobId);
      this.jobService.getApplicantsList(data.jobId).subscribe(jobApplicantsList => {
        this.jobApplicantsList = jobApplicantsList.jobApplicants;
        console.log(this.jobApplicantsList);
      })
      //find this job and its applicants

      console.log("********++++++"+data);
    console.log(data);
    })
  }
  shortListed(){
    
  }

}
