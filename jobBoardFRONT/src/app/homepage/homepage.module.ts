
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRouterModule } from './homepage.routing';
import { HomepageComponent } from './homepage.component';
import { SharedModule } from '../shared/shared.module';
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
    HomepageComponent
  ]
})
export class HomepageModule { }
