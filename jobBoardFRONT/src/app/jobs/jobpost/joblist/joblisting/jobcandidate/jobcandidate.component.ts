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
  jobId;
  alreadyAdded = false;

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.jobId = data.jobId;
      console.log(data.jobId);
      this.jobService.getApplicantsList(data.jobId).subscribe(jobApplicantsList => {
        this.jobApplicantsList = jobApplicantsList.jobApplicants;
        console.log(this.jobApplicantsList);
      })
      console.log("********++++++"+data);
    console.log(data);
    })
  }
  shortListed(applicant){
    console.log(applicant)
    this.jobService.shortListACandidate(this.jobId, applicant).subscribe(data=>{
      if (data.status === 201) {
        this.alreadyAdded = true;
        setTimeout(()=>this.alreadyAdded = false, 1000);
      }
      console.log(data);
    })
    
  }

}
