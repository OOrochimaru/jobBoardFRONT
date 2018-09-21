
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JobpostComponent } from './jobpost/jobpost.component';
import { JobsComponent } from './jobhome/jobs.component';
import { JobRouterMoudle } from './job.routing';


@NgModule({
  declarations: [
    JobpostComponent,
    JobsComponent
  ],
  imports: [
    JobRouterMoudle
  ],
  providers: [],
})
export class JobModule { }
