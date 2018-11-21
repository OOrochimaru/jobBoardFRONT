import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  myForm: FormGroup;
  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.myForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  sendMessage(){
    console.log('message to integrate');
  }
  

}
