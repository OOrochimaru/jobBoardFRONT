import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  myForm: FormGroup;
  emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor(private fb: FormBuilder,
  private userService: UserService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required,Validators.pattern(this.emailRegex)]]
    })
  }
  private get f(){
    return this.myForm.controls;
  }


  loginFormSubmit(){
    this.submitted = true;
    // console.log(this.myForm.valid);
    if (this.myForm.valid) {
      const credentials = this.myForm.get('username').value;
      // console.log(credentials);
      this.userService.attemptAuth('login', credentials)
      .subscribe(data => {
        console.log(data);
      })
    }
  }
}
