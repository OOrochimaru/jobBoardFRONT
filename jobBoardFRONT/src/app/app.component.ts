import { Component, OnInit } from '@angular/core';
import { UserService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private userServive: UserService){}
  ngOnInit(){
    this.userServive.populate();
  }
}
