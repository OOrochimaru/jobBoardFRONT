import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../../core/models';
import { ApiService } from '../../core/services';
import { environment } from '../../../environments/environment'
import { validateConfig } from '@angular/router/src/config';
@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  @Input() j: Job;
  ngOnInit(){
  }



}
