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
  employer : boolean;
  isAuthenticated: boolean;
  ngOnInit() {

  this.userService.currentUser.subscribe((user) => {
      this.currentuser = user;
      console.log(this.currentuser.role)
      this.username = this.currentuser.username;
      console.log(this.currentuser);
      if (this.currentuser.role === 'employer') {
        this.employer = true;
      }else{
        this.employer = false;
      }
      // console.log(this.currentuser.username);
  });
  this.userService.isAuthenticated.subscribe((authenticated)=>{
    this.isAuthenticated = authenticated;
  })
  }
  checkUserAuthentication(){
      if (!this.isAuthenticated) {
        this.router.navigateByUrl('/login');
      }
  }
  logout(){
    this.userService.purgeAuth();
    this.router.navigateByUrl("/");
    console.log("logout")
  }



}
