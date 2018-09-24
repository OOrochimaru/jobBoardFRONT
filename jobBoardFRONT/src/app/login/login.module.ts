
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { JobRouterMoudle } from './login.routing';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    JobRouterMoudle,
  ],
  providers: [],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
