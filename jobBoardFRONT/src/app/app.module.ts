import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './layout/footer.component';
import { AppRouterMoudle } from './app.routing';
import { RouterModule } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    JobsComponent,
    ContactusComponent,
    AboutusComponent,
    LoginComponent
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
