import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../core/services/user.service';
import { Router } from '@angular/router';
import { Errors } from '../core/models/errors.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  myForm: FormGroup;
  emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  errors: Errors = {errors: {}};
  constructor(private fb: FormBuilder,
  private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]]
    })
  }
  private get f(){
    return this.myForm.controls;
  }


  loginFormSubmit(){
    this.submitted = true;
    console.log(this.myForm.valid);
    if (this.myForm.valid) {
      
      const credentials = this.myForm.value;
      // console.log(this.myForm.get('username'));
      this.userService.attemptAuth('login', credentials)
      .subscribe(data =>  {
        // console.log(data.user.userid);

        this.router.navigate(['/index'])
      }
        ,
      error =>{
        this.errors = error;
        this.submitted = false;
      } 


      //   {
        
        
      //   if (data.user.username === this.myForm.get('username').value) {
      //     this.router.navigate(['/index']);
      //     // console.log("usermatched");
      //   }else{
      //     this.errors = data.user;
      //   this.submitted = false;


      //     console.log("not matched");
      //   }
      // }
    )
    }
  }
}
