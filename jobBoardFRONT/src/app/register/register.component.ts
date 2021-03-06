import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../core/services/user.service';
import { filter, debounce, debounceTime, distinctUntilKeyChanged, distinctUntilChanged } from 'rxjs/operators';
import { ToasterService } from '../core/services/toaster.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, Validators {

 
  authType: String = 'register';
  submitted = false;
  public myForm: FormGroup;
  emailExist = false;
  emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  passwordRegex = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";
  // "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$";
  numberRegex = /^[0-9]{10}$/;
  constructor(private form: FormBuilder,
     private router: Router,
    private route: ActivatedRoute,
     private userService: UserService,
    private tstrService : ToasterService
    ) {

    // this.fullname = new FormControl('', [Validators.required, Validators.minLength(5)]);
    // this.email = new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]);
    // this.password = new FormControl('',[Validators.required, Validators.pattern(this.emailRegex)]);
    // this.cPassword = new FormControl('');
    // this.gender = new FormControl('');
  }
  
  
  
  ngOnInit() {
    this.createFrom();

    this.myForm.controls['email'].valueChanges.pipe(
      filter(email => this.myForm.controls['email'].valid),
      debounceTime(10), 
      distinctUntilChanged(),
    ).subscribe(email => {
      this.userService.checkUser(email).subscribe((data) => {
        console.log(data);
        this.emailExist = true;
      }
      , (error) => {
        console.log("error occured")
        this.emailExist = false;
      }
    )
    });
    
  }


  private createFrom() {
    this.myForm = this.form.group({
      fullname: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      password: ['', [Validators.required]
        //  Validators.pattern(this.emailRegex)]
        ],
      cPassword: ['', [Validators.required,]
        //  Validators.pattern(this.emailRegex)]
        ],
      number: ['', [Validators.required, Validators.pattern(this.numberRegex)]],
      gender: ['', Validators.required],
      userType: ['', Validators.required],
      currentLocation: ['', Validators.required]
    }, { validator: this.checkPassword })

    // this.myForm = new FormGroup({
    //   fullname: this.fullname,
    //   email: this.email,
    //   password: this.password,
    //   cPassword: this.cPassword,
    //   gender: this.gender
    // })
  }
  public get f() {
    return this.myForm.controls;
  }

  checkPassword(checkForm: FormGroup) {
    return checkForm.get('password').value === checkForm.get('cPassword').value ?
      null : { 'mismatch': true };
  }

  onFormSubmit(){
    this.submitted = true;
    let inputted = this.myForm.controls;
    // console.log(this.myForm.get['userType'].value);
    console.log(this.myForm.value);
    console.log(this.myForm.valid);
    
    // console.log() 
    if (inputted.fullname.valid && inputted.email.valid && inputted.password.valid && 
      inputted.cPassword.valid && inputted.number.valid
      && inputted.currentLocation.valid) {
        const userCredentials = this.myForm.value;
        console.log(userCredentials);
        this.userService.attemptSignup(this.authType, userCredentials).subscribe(data =>{
          this.tstrService.successToast('Signup Success', 'Now verify your Account');
          this.router.navigate(['/login']);
          console.log(data);
        })
    }else{
      this.tstrService.errorToast('Error in Field', 'Please Provide Proper Field Data');
    }
    
  }
}
