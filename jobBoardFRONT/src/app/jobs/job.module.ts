import { NgModule } from '@angular/core';
import { JobpostComponent } from './jobpost/jobpost.component';
import { JobsComponent } from './jobhome/jobs.component';
import { JobRouterMoudle } from './job.routing';
import { SharedModule } from '../shared/shared.module';
import { JobpreviewComponent } from './jobpost/jobpreview/jobpreview.component';


@NgModule({
  declarations: [
    JobpostComponent,
    JobsComponent,
    JobpreviewComponent
  ],
  imports: [
    JobRouterMoudle,
    SharedModule
  ],
  providers: [],
  exports: [
    JobpostComponent,
    JobsComponent
  ]
})
export class JobModule { }
