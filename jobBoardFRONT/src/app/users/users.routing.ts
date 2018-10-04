import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { ProfileDetailComponent } from './profile/profile-detail/profile-detail.component';
import { ProfileBillingComponent } from './profile/profile-billing/profile-billing.component';
import { AuthGuard } from '../auth/auth.service';
import { NoAuthGuard } from '../auth/no-auth.service';

const routes: Routes = [
  {
    path: ':username', 
    children: [
      { path: 'details', canActivate: [AuthGuard], component: ProfileDetailComponent },
      {path: 'billing', canActivate: [AuthGuard], component: ProfileBillingComponent},
    ]
  }
];
@NgModule({
  imports: [
    // CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule],
})
export class UsersRoutingModule { }
