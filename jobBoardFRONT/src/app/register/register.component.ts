import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, Validators {

  // fullname: FormControl;
  // email: FormControl;
  // password: FormControl;
  // cPassword: FormControl;
  // gender: FormControl;

  submitted: boolean;
  public myForm: FormGroup;
  emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  passwordRegex = "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$";
  numberRegex = /^[0-9]{10}$/;
  constructor(private form: FormBuilder, private route: Router) {

    // this.fullname = new FormControl('', [Validators.required, Validators.minLength(5)]);
    // this.email = new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]);
    // this.password = new FormControl('',[Validators.required, Validators.pattern(this.emailRegex)]);
    // this.cPassword = new FormControl('');
    // this.gender = new FormControl('');
  }



  ngOnInit() {
    this.createFrom();
  }


  private createFrom() {
    this.myForm = this.form.group({
      fullname: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      password: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      cPassword: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      number: ['', [Validators.required, Validators.pattern(this.numberRegex)]],
      gender: ['', Validators.required]
    }, { validator: this.checkPassword })

    // this.myForm = new FormGroup({
    //   fullname: this.fullname,
    //   email: this.email,
    //   password: this.password,
    //   cPassword: this.cPassword,
    //   gender: this.gender
    // })
  }
  get f() {
    return this.myForm.controls;
  }

  checkPassword(checkForm: FormGroup) {
    return checkForm.get('password').value === checkForm.get('cPassword').value ?
      null : { 'mismatch': true };
  }

  onFormSubmit(){
    this.submitted = true;
    this.route.navigate(['/job/user/details']);

  }
}
