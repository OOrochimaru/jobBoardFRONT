
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRouterModule } from './homepage.routing';
import { HomepageComponent } from './homepage.component';

@NgModule({
  declarations: [
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    HomepageRouterModule
  ],
  providers: [],
  exports:[
    HomepageComponent
  ]
})
export class HomepageModule { }
