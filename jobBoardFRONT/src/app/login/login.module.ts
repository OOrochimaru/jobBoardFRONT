
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRouterModule } from './login.routing';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    LoginRouterModule,
  ],
  providers: [],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
