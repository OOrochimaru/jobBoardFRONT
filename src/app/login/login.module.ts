
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRouterModule } from './login.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    LoginRouterModule,
    SharedModule,
    CommonModule
  ],
  providers: [],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
