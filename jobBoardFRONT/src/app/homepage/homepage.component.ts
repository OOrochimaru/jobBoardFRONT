import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../core/services';
import { Job } from '../core/models';
import { JobService } from '../core/services/job.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  paginationData : any = {};
  submitted = false;
  myForm: FormGroup;
  // jobsList: any[] = [];
  totalJobs: number;
  paginateOptions: Boolean = true;

  constructor(private fb: FormBuilder,
    private apiService: ApiService,
    private jobService: JobService

  ) { }

  
 jobs: any[] = [];
  ngOnInit() {
    this.createForm();
       this.apiService.get('index/').subscribe(data => {
      this.jobs = data.jobs;
      this.totalJobs = data.totalJobs;
    });

  }

  createForm() {
    this.myForm = this.fb.group({
      jobTitle: ['', Validators.required],
      location: [''],
    })
  }
  public get f() {
    return this.myForm.controls;
  }

  searchJob() {
    
    const query = this.myForm.value;
    if (this.myForm.get('jobTitle') != null) {
      let credentials = this.myForm.value;
      console.log(credentials);
      this.jobService.getSearchJobs('searchJobs', credentials).subscribe(data => {
        this.paginateOptions = false;
        this.jobs = data.jobs
        this.totalJobs = data.jobs.length
        console.log(this.jobs);
      })

    }

    console.log(this.myForm.value);
  }
  paginate(event){
  console.log(event.first);
  console.log(event);
  
  this.paginationData.first = event.first;
  this.paginationData.rows = event.rows;
  this.paginationData.page = event.page;
  this.paginationData.pageCount = event.pageCount;

  var paginate = this.paginationData;

  this.jobService.getPaginationJobs('paginateJobs', paginate)
  .subscribe(data => {
    // this.employers = data.data;
    this.jobs = [];
    this.totalJobs = data.totalJobs;
    for(var i = 0; i < data.jobs.length; i++){
        this.jobs.push(data.jobs[i]); 
      }
      console.log('this.jobs', this.jobs);

  })

  }



  
}
