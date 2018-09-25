
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { ShowAuthedDirective } from './show-authed.directive';


@NgModule({
  declarations: [
    // HeaderComponent,
    FooterComponent,
    ShowAuthedDirective
  ],
  imports: [
    RouterModule
  ],
  providers: [],
  exports: [
    // HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
