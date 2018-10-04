import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../core/services';
import { Job } from '../core/models';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  
  submitted = false;
  myForm: FormGroup;

  constructor(private fb: FormBuilder,
    private apiService: ApiService

  ) { }

  
 jobs: Job[] = [];
  ngOnInit() {
    this.createForm();
       this.apiService.get('index/').subscribe(data => {
      this.jobs = data.jobs;
      this.jobs.forEach(job =>{
        console.log(job);
      })})

  }

  createForm() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      location: [''],
    })
  }
  private get f() {
    return this.myForm.controls;
  }

  searchJob() {

    const query = this.myForm.value;

    console.log(this.myForm.value);
  }



  
}
