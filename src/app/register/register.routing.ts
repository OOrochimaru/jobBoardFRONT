import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { RegisterComponent } from "./register.component";
import { JobseekerinfoComponent } from "./jobseekerinfo/jobseekerinfo.component";

const routes: Routes = [
        {path: '', component: RegisterComponent},
        {path: 'jobseekerinfo', component: JobseekerinfoComponent},
        {path: 'user', loadChildren: '../users/users.module#UsersModule'},
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
    
})
export class RegisterRouterModule{}