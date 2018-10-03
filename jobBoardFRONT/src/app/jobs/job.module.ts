import { NgModule } from '@angular/core';
import { JobpostComponent } from './jobpost/jobpost.component';
import { JobsComponent } from './jobhome/jobs.component';
import { JobRouterMoudle } from './job.routing';
import { SharedModule } from '../shared/shared.module';
import { JobpreviewComponent } from './jobpost/jobpreview/jobpreview.component';
import { JoblistComponent } from './jobpost/joblist/joblist.component';

@NgModule({
  declarations: [
    JobpostComponent,
    JobsComponent,
    JoblistComponent,
    JobpreviewComponent
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
    JobpreviewComponent
  ]
})
export class JobModule { }
