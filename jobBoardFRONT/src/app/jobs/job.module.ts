import { NgModule } from '@angular/core';
import { JobpostComponent } from './jobpost/jobpost.component';
import { JobsComponent } from './jobhome/jobs.component';
import { JobRouterMoudle } from './job.routing';
import { SharedModule } from '../shared/shared.module';
import { JobpreviewComponent } from './jobpost/joblist/joblisting/jobpreview/jobpreview.component';
import { JoblistComponent } from './jobpost/joblist/joblist.component';
import { JobListingComponent } from './jobpost/joblist/joblisting/joblisting.component';
@NgModule({
  declarations: [
    JobpostComponent,
    JobsComponent,
    JoblistComponent,
    JobpreviewComponent,
    JobListingComponent,
  ],
  imports: [
    JobRouterMoudle,
    SharedModule
  ],
  providers: [],
  exports: [
    JobpostComponent,
    JobsComponent,
    JoblistComponent,
    JobpreviewComponent,
    JobListingComponent,
  ]
})
export class JobModule { }
