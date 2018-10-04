import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../core/services';
import { JobService } from '../../../core/services/job.service';
import { User } from '../../../core/models';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

  currentUser: User;
  myForm: FormGroup;
  constructor(private route: ActivatedRoute,
     private jobService: JobService,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      companyName: [''],
      address: [''],
      phone: [''],
      contactName:[''],
      email: [''],
      description: [''],
      password: [''],
      website:[''],
    });

    this.getUserDetails();


    
  }

  getUserDetails(){
    this.route.params.subscribe(param => {
      this.jobService.getUser(param.username).subscribe(data => {
        this.currentUser = data.user;
        console.log(this.currentUser);
        if (data) {
          console.log("patch value"+data.user.userlocation)
          this.myForm.patchValue({
            address: this.currentUser.userlocation ? this.currentUser.userlocation : "",
            company: this.currentUser.company ? this.currentUser.company : "",
            contactName: this.currentUser.username ? this.currentUser.username : "",
            companyName: this.currentUser.company ? this.currentUser.company : "",
            email: this.currentUser.email ? this.currentUser.email : "",
            phone: this.currentUser.number ? this.currentUser.number : "",
            
          })
        }
      })
    })
  }
}
