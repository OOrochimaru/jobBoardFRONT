import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRouterMoudle } from './app.routing';
// import { JobModule } from './jobs/job.module'
import { SharedModule } from './shared/shared.module';
// import { AboutusModule } from './aboutus/aboutus.module';
import { ContactusModule } from './contactus/contactus.module';
import { UsersModule } from './users/users.module';
// import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { HomepageModule } from './homepage/homepage.module';

@NgModule({
  declarations: [
    AppComponent,
    // HomepageComponent,

  ],
  imports: [
    // AuthModule,
    BrowserModule,
    AppRouterMoudle,
    SharedModule,
    ContactusModule,
    CoreModule,
    HomepageModule,
    BrowserAnimationsModule,
    // UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
