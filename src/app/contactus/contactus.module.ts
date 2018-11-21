
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactusRouterModule } from './contactus.routing';
import { ContactusComponent } from './contactus.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ContactusComponent,
  ],
  imports: [
    CommonModule,
    ContactusRouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports:[
    ContactusComponent,
  ]
})
export class ContactusModule { }
