import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./mainPages/homepage/homepage.component";
import { NgModule } from "@angular/core";
import { JobsComponent } from "./mainPages/jobs/jobhome/jobs.component";
import { ContactusComponent } from "./mainPages/contactus/contactus.component";
import { AboutusComponent } from "./mainPages/aboutus/aboutus.component";
import { LoginComponent } from "./mainPages/login/login.component";

const routes: Routes = [
    {path: '', redirectTo:'/index', pathMatch:'full'},
    {path: 'index', component: HomepageComponent},
    {path: 'jobs', component: JobsComponent},
    {path: 'contactus', component: ContactusComponent},
    {path: 'aboutus', component: AboutusComponent},
    {path: 'login', component: LoginComponent},
    {path: 'job',loadChildren:
},

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