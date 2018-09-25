
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRouterModule } from './register.routing';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    RegisterRouterModule,
    CommonModule
  ],
  providers: [],
  exports:[
    RegisterComponent
  ]
})
export class RegisterModule { }
