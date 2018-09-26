import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; 
import { CustomValidators } from './custom-validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, Validators {

  fullname: FormControl;
  email: FormControl;
  password: FormControl;
  cPassword: FormControl;
  gender: FormControl;


  public myForm: FormGroup;
  emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  constructor(private form: FormBuilder) { 

    this.fullname = new FormControl('', [Validators.required, Validators.minLength(5)]);
    this.email = new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]);
    this.password = new FormControl('');
    this.cPassword = new FormControl('');
    this.gender = new FormControl('');
  }


  ngOnInit() {
    this.createFrom();
  }

private createFrom(){
  this.myForm = new FormGroup({
    fullname: this.fullname,
    email: this.email,
    password: this.password,
    cPassword: this.cPassword,
    gender: this.gender
  })
}

}
