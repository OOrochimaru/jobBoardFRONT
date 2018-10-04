import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users.routing';
import { ProfileDetailComponent } from './profile/profile-detail/profile-detail.component';
import { ProfileBillingComponent } from './profile/profile-billing/profile-billing.component';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  imports: [
    // CommonModule,
    UsersRoutingModule
  ],
  declarations: [
    UsersComponent,
    ProfileDetailComponent,
    ProfileBillingComponent,
    ProfileComponent
  ],
  exports: [UsersComponent]
})
export class UsersModule { }
