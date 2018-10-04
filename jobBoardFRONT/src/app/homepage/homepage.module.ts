
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRouterModule } from './homepage.routing';
import { HomepageComponent } from './homepage.component';
import { SharedModule } from '../shared/shared.module';
import { HomeAuthResolver } from './home-auth-resolver.service';
import { FormGroup, FormControl } from '@angular/forms';
import { JobModule } from '../jobs/job.module';
@NgModule({
  declarations: [
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    HomepageRouterModule,
    SharedModule,
    JobModule
  ],
  providers: [HomeAuthResolver],
  exports:[
    HomepageComponent,
  ]
})
export class HomepageModule { }
