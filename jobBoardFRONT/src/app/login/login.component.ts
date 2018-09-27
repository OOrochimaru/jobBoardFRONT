import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  private get f(){
    return this.myForm.controls;
  }


  loginFormSubmit(){

  }
}
