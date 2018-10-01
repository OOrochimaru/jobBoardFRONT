import { NgModule } from '@angular/core';
import { JobpostComponent } from './jobpost/jobpost.component';
import { JobsComponent } from './jobhome/jobs.component';
import { JobRouterMoudle } from './job.routing';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    JobpostComponent,
    JobsComponent
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
