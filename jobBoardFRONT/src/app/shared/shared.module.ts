
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule, FormsModule, FormGroup, FormControl} from '@angular/forms';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { ShowAuthedDirective } from './show-authed.directive';
import { HttpClientModule } from '@angular/common/http';
import { JobListComponent } from './job-list/job-list.component';
import { ErrorListComponent } from './error-list.component';
import { DropdownDirective } from './layout/dropdown.directive';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ShowAuthedDirective,
    JobListComponent, 
    ErrorListComponent,
    DropdownDirective,
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  exports:[
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    JobListComponent,
    ErrorListComponent,
    DropdownDirective
  ]
})
export class SharedModule { }
