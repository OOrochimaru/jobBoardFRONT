import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRouterMoudle } from './app.routing';
// import { JobModule } from './jobs/job.module'
import { SharedModule } from './shared/shared.module';
// import { AboutusModule } from './aboutus/aboutus.module';
import { ContactusModule } from './contactus/contactus.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,

  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRouterMoudle,
    SharedModule,
    ContactusModule,
    SharedModule,
    // UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
