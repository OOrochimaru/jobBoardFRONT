
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule, FormsModule, FormGroup, FormControl} from '@angular/forms';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { ShowAuthedDirective } from './show-authed.directive';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ShowAuthedDirective
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  exports:[
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CommonModule,
  ]
})
export class SharedModule { }
