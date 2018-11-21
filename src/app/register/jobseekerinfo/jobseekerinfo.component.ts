import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { FileuploadService } from '../../core/services/fileupload.service';

@Component({
  selector: 'app-jobseekerinfo',
  templateUrl: './jobseekerinfo.component.html',
  styleUrls: ['./jobseekerinfo.component.css']
})
export class JobseekerinfoComponent implements OnInit {

  myForm: FormGroup;
  constructor(private fb: FormBuilder,
  // private uploadService: FileuploadService
) { }
  selectedFiles: any;
  ngOnInit() {
    this.createForm();
  }
  public get f() {
    return this.myForm.controls;
  }
  createForm(){
    this.myForm = this.fb.group({
      email: [''],
      qualification: [''],
      skills: [''],
      experience: [''],
      resume: ['']
    })
  }

  selectFile(event){
  this.selectedFiles = event.target.files;
  }

  onFormSubmit(){
    // this.uploadService.uploadfile(this.selectedFiles.item(0));
  }

}
