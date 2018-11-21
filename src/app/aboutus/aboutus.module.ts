
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusRouterModule } from './aboutus.routing';
import { AboutusComponent } from './aboutus.component';

@NgModule({
  declarations: [
    AboutusComponent
  ],
  imports: [
    CommonModule,
    AboutusRouterModule
  ],
  providers: [],
  exports:[
    AboutusComponent 
  ]
})
export class AboutusModule { }
