import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { JobsComponent } from "./jobhome/jobs.component";
import { JobpostComponent } from "./jobpost/jobpost.component";
import { AuthGuard } from "../auth/auth.service";

const routes: Routes = [
    {path: '', 
    children: [
        {path: 'jobindex', component: JobsComponent},
        {path: 'postjob',canActivate: [AuthGuard], component: JobpostComponent},
        {path: 'user', loadChildren: '../users/users.module#UsersModule'},
    ]
    },
    {path: ':username',
    children: [
        {path: 'jobindex', component: JobsComponent},
        {path: 'postjob', component: JobpostComponent},
        {path: 'user', loadChildren: '../users/users.module#UsersModule'},
    ]
    },
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
    
})
export class JobRouterMoudle{}