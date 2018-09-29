import { Component, OnInit, NgModule } from '@angular/core';
import { UserService } from '../../core/services';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  logout(){
    this.userService.purgeAuth();
    
    console.log("logout")
  }

}
