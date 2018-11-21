
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRouterModule } from './homepage.routing';
import { HomepageComponent } from './homepage.component';
import { SharedModule } from '../shared/shared.module';
import { HomeAuthResolver } from './home-auth-resolver.service';
import { JobModule } from '../jobs/job.module';
import { PaginatorModule } from 'primeng/paginator';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    HomepageRouterModule,
    SharedModule,
    JobModule,
    PaginatorModule,
    ReactiveFormsModule
  ],
  providers: [HomeAuthResolver],
  exports:[
    HomepageComponent,
  ]
})
export class HomepageModule { }
