
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {ApiService,
  JwtService} from './services';
import { UserService } from './services/user.service'
  @NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
  ],
  providers: [
    UserService,
    JwtService,
    ApiService,
],
  exports:[
  ]
})
export class CoreModule { }
