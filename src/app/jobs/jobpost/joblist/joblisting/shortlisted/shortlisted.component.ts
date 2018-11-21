import { Component, OnInit } from '@angular/core';
import { User } from '../../../../../core/models';
import { JobService } from '../../../../../core/services/job.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shortlisted',
  templateUrl: './shortlisted.component.html',
  styleUrls: ['./shortlisted.component.css']
})
export class ShortlistedComponent implements OnInit {
  
  nocandidate = true;
  shortListedApplicants: any[];
  constructor(private jobService: JobService, 
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.jobService.getShortListedApplicants(param.get('jobId')).subscribe(data => {
        this.shortListedApplicants = data.shortlisted;
        console.log(this.shortListedApplicants[0].count);
        // if (this.shortListedApplicants[0].count === 0) {
        //   this.nocandidate = true;
        // }
        this.nocandidate = false;
      }, 
    (error) => {
      this.nocandidate =  true
    });
    });
  }

}
