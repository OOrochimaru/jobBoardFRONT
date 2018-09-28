import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// import { UserService } from '../core/services/user.service';
import { filter, debounce, debounceTime, distinctUntilKeyChanged, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class JobDetailComponent  {

 
  // authType: String = '';
  // submitted = false;
  // public myForm: FormGroup;
  // emailExist = false;
  // emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  // passwordRegex = "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$";
  // numberRegex = /^[0-9]{10}$/;
  // constructor(private form: FormBuilder,
  //    private router: Router,
  //   private route: ActivatedRoute,
  //    private userService: UserService) {

  //   // this.fullname = new FormControl('', [Validators.required, Validators.minLength(5)]);
  //   // this.email = new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]);
  //   // this.password = new FormControl('',[Validators.required, Validators.pattern(this.emailRegex)]);
  //   // this.cPassword = new FormControl('');
  //   // this.gender = new FormControl('');
  // }
  
  
  
  // ngOnInit() {
  //   this.createFrom();

  //   this.myForm.controls['email'].valueChanges.pipe(
  //     filter(email => this.myForm.controls['email'].valid),
  //     debounceTime(1000), 
  //     distinctUntilChanged(),
  //   ).subscribe(email => {
  //     this.userService.checkUser(email).subscribe((data) => {
  //       console.log(data);
  //       this.emailExist = false;
  //     }, (error) => {
  //       console.log(error)
  //       this.emailExist = true;
  //     })
  //   })
  // }


  // private createFrom() {
  //   this.myForm = this.form.group({
  //     fullname: ['', [Validators.required, Validators.minLength(5)]],
  //     email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
  //     password: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
  //     cPassword: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
  //     number: ['', [Validators.required, Validators.pattern(this.numberRegex)]],
  //     gender: ['', Validators.required],
  //     userTpe: ['', Validators.required]
  //   }, { validator: this.checkPassword })

  //   // this.myForm = new FormGroup({
  //   //   fullname: this.fullname,
  //   //   email: this.email,
  //   //   password: this.password,
  //   //   cPassword: this.cPassword,
  //   //   gender: this.gender
  //   // })
  // }
  // private get f() {
  //   return this.myForm.controls;
  // }

  // checkPassword(checkForm: FormGroup) {
  //   return checkForm.get('password').value === checkForm.get('cPassword').value ?
  //     null : { 'mismatch': true };
  // }

  // onFormSubmit(){
  //   this.submitted = true;
  //   let inputted = this.myForm.controls;
    
  //   console.log(this.myForm.value);
    
  //   // console.log() 
  //   // if (inputted.fullname.valid && inputted.email.valid && inputted.password.valid && 
  //   //   inputted.cPassword.valid && inputted.number.valid) {
  //   //     const userCredentials = this.myForm.value;
  //   //   this.userService.attemptAuth(this.authType, userCredentials)
  //   //   this.router.navigate(['/user/details']);
  //   // }

  // }
}
