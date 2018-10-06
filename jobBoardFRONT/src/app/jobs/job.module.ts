import { NgModule } from '@angular/core';
import { JobpostComponent } from './jobpost/jobpost.component';
import { JobsComponent } from './jobhome/jobs.component';
import { JobRouterMoudle } from './job.routing';
import { SharedModule } from '../shared/shared.module';
import { JobpreviewComponent } from './jobpost/joblist/joblisting/jobpreview/jobpreview.component';
import { JoblistComponent } from './jobpost/joblist/joblist.component';
import { JobListingComponent } from './jobpost/joblist/joblisting/joblisting.component';
import { JobpreviewResolver } from './jobpost/joblist/joblisting/jobpreview/jobpreview-resolver.service';
import { JobcandidateComponent } from './jobpost/joblist/joblisting/jobcandidate/jobcandidate.component';
@NgModule({
  declarations: [
    JobpostComponent,
    JobsComponent,
    JoblistComponent,
    JobpreviewComponent,
    JobListingComponent,
    JobcandidateComponent,
  ],
  imports: [
    JobRouterMoudle,
    SharedModule
  ],
  providers: [JobpreviewResolver],
  exports: [
    JobpostComponent,
    JobsComponent,
    JoblistComponent,
    JobpreviewComponent,
    JobListingComponent,
    JobcandidateComponent
  ]
})
export class JobModule { }
