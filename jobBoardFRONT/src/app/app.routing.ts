import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { NgModule } from "@angular/core";
import { JobsComponent } from "./jobs/jobs.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    {path: '', redirectTo:'/index', pathMatch:'full'},
    {path: 'index', component: HomepageComponent},
    {path: 'jobs', component: JobsComponent},
    {path: 'contactus', component: ContactusComponent},
    {path: 'aboutus', component: AboutusComponent},
    {path: 'login', component: LoginComponent},


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