
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRouterModule } from './homepage.routing';
import { HomepageComponent } from './homepage.component';
import { SharedModule } from '../shared/shared.module';
import { HomeAuthResolver } from './home-auth.service';
@NgModule({
  declarations: [
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    HomepageRouterModule,
    SharedModule
    // FormGroup,
    // FormControl
  ],
  providers: [],
  exports:[
    HomepageComponent,
    HomeAuthResolver
  ]
})
export class HomepageModule { }
