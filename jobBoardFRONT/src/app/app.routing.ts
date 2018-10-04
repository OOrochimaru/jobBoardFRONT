import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { NgModule } from "@angular/core";
import { ContactusComponent } from "./contactus/contactus.component";
import { NoAuthGuard } from "./auth/no-auth.service";

const routes: Routes = [
    {path: '', redirectTo:'index', pathMatch:'full'},
    {path: 'index',
    // canActivate: [NoAuthGuard],
     component: HomepageComponent},
    {path: 'contactus', component: ContactusComponent},
    {path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutusModule'},
    {path: 'login', canActivate: [NoAuthGuard], loadChildren:'./login/login.module#LoginModule'},
    {path: 'job', loadChildren: './jobs/job.module#JobModule'},
    {path: 'register',canActivate: [NoAuthGuard], loadChildren: './register/register.module#RegisterModule'},
    {path: 'user', loadChildren: './users/users.module#UsersModule'},
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
    
})
export class AppRouterMoudle{}