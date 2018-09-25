import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRouterMoudle } from './app.routing';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { JobModule } from './jobs/job.module';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './shared/layout/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactusComponent,
    AboutusComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRouterMoudle,
    JobModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
