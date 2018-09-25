
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactusRouterModule } from './contactus.routing';
import { ContactusComponent } from './contactus.component';

@NgModule({
  declarations: [
    ContactusComponent,
  ],
  imports: [
    CommonModule,
    ContactusRouterModule
  ],
  providers: [],
  exports:[
    ContactusComponent,
  ]
})
export class ContactusModule { }
