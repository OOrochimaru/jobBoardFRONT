import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators , FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      alert(' User Email - ' + this.loginForm.value.email + ' User Password - ' + this.loginForm.value.password);
      console.log(' User Email - ' + this.loginForm.value.email + ' User Password - ' + this.loginForm.value.password );
  }

}
