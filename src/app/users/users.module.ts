import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users.routing';
import { ProfileDetailComponent } from './profile/profile-detail/profile-detail.component';
import { ProfileBillingComponent } from './profile/profile-billing/profile-billing.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    // CommonModule,
    UsersRoutingModule,
    SharedModule
  ],
  declarations: [
    UsersComponent,
    ProfileDetailComponent,
    ProfileBillingComponent,
  ],
  exports: [UsersComponent]
})
export class UsersModule { }
