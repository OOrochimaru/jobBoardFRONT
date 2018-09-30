import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../core/services';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  submitted = false;
  myForm: FormGroup;

  constructor(private fb: FormBuilder,
    private apiService: ApiService

) { }

  ngOnInit() {
    this.createForm();

  }

  createForm(){
    this.myForm = this.fb.group({
      name : ['', Validators.required],
      location : [''],
    })
  }
  private get f(){
    return this.myForm.controls;
  }

  searchJob(){
    console.log(this.myForm.value);
  }

}
