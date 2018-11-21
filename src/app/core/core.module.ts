
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {
  ApiService,
  JwtService
} from './services';
import { UserService } from './services/user.service'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttptokenInterceptor } from './interceptors/http.token.interceptor';
import { JobService } from './services/job.service';
import { ToastrModule } from 'ngx-toastr';
import { ToasterService } from './services/toaster.service';
import { FileuploadService } from './services/fileupload.service';

@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
    ToastrModule.forRoot({preventDuplicates: true})
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttptokenInterceptor, multi: true
    },
    ApiService,
    JwtService,
    UserService,
    JobService,
    ToasterService,
    FileuploadService
  ],
  exports: [
  ]
})
export class CoreModule { }
