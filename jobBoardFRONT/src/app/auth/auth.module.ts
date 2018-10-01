import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoAuthGuard } from './no-auth.service';
import { AuthComponent } from './auth.component';
import { AuthGuard } from './auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuthComponent],
  providers:[NoAuthGuard,
    AuthGuard
  ],
})
export class AuthModule { }
