import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../core/services';
import { tap } from 'rxjs/operators';
import { JobService } from '../../core/services/job.service';
import { Job } from '../../core/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobpost',
  templateUrl: './jobpost.component.html',
  styleUrls: ['./jobpost.component.css']
})
export class JobpostComponent implements OnInit {

  myForm: FormGroup;
  constructor(private fb: FormBuilder,
    private jobService: JobService,
    private userService: UserService,
    private router: Router
  ) {

  }
  location: string;
  companyName: string;
  userid: string;
  username: string;
  jobForm: Job;
  jobId: string
  ngOnInit() {
    this.userService.currentUser.subscribe(user => {
      // console.log(user)
      this.location = user.userlocation;
      this.username = user.username;
      // this.companyName = user.userCompany;
      this.userid = user._id;

      // this.location = user.userlocation;
      // this.location.foreach(location => {
      //   this.location.push(location);
      // })
      // console.log(this.location);
      // console.log(this.companyName);
      // console.log(this.username);
    })
    this.createForm();
  }
  createForm() {
    this.myForm = this.fb.group({
      jobTitle: ['', Validators.required],
      jobLocation: ['', Validators.required],
      jobType: ['', Validators.required],
      jobDescription: ['', Validators.required],
      companyName: ['', Validators.required],
      experience: ['', Validators.required],
      applicationMethod: ['', Validators.required]

    })
  }
  private get f() {
    return this.myForm.controls;
  }


  postAJob() {
    if (this.myForm.valid) {
      this.jobForm = this.myForm.value;
      console.log(this.jobForm);
      this.jobService.save(this.userid, this.jobForm).subscribe(data => {
        console.log(data);
        this.jobId = data._id;
          this.router.navigateByUrl('/job/'+this.username+"/"+this.jobId);
      });
    }
  }

}
