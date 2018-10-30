
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { RegisterRouterModule } from './register.routing';
import { SharedModule } from '../shared/shared.module';
import { ToasterService } from '../core/services/toaster.service';
@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    RegisterRouterModule,
    SharedModule,
  ],
  providers: [],
  exports:[
    RegisterComponent
  ]
})
export class RegisterModule { }
