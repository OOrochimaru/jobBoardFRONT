import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './shared/layout/footer.component';
import { AppRouterMoudle } from './app.routing';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { JobModule } from './jobs/job.module'
import { ShowAuthedDirective } from './shared/show-authed.directive'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    ContactusComponent,
    AboutusComponent,
    LoginComponent,
    ShowAuthedDirective

  ],
  imports: [
    BrowserModule,
    AppRouterMoudle,
    JobModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
