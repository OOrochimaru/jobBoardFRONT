import { Component, OnInit, NgModule } from '@angular/core';
import { UserService } from '../../core/services';
import { Router } from '@angular/router';
import { User } from '../../core/models';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  currentuser: User;
  username: string;
  ngOnInit() {

  this.userService.currentUser.subscribe((user) => {
    console.log(user);
      this.currentuser = user;
      this.username = this.currentuser.username;
      // console.log(this.currentuser.username);
  })
  }
  logout(){
    this.userService.purgeAuth();
    this.router.navigateByUrl("/");
    console.log("logout")
  }


}
