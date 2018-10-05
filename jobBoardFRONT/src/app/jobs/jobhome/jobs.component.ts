import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JobService } from '../../core/services/job.service';
import { Job } from '../../core/models';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  myForm: FormGroup;
  jobs: Job[];
  constructor(private fb: FormBuilder, 
  private jobService: JobService) { }

  ngOnInit() {
    this.createForm();
  }
  createForm(){
    this.myForm = this.fb.group({
      jobTitle: [''],
      location: [''],
    })
  }

  searchJob(){
    if (this.myForm.get('jobTitle') != null) {
      let credentials = this.myForm.value;
      console.log(credentials);
      this.jobService.getSearchJobs('searchJobs', credentials).subscribe(data => {
        this.jobs = data.jobs
        console.log(this.jobs);
      })

    }
    // console.log(this.myForm.value);

  }
}
