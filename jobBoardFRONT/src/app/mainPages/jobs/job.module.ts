import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header.component';
import { HomepageComponent } from './mainPages/homepage/homepage.component';
import { FooterComponent } from './shared/footer.component';
import { AppRouterMoudle } from './app.routing';
import { RouterModule } from '@angular/router';
import { JobsComponent } from './mainPages/jobs/jobhome/jobs.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    JobsComponent,
    ContactusComponent,
    AboutusComponent,
    LoginComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRouterMoudle
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
