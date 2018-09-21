import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { JobsComponent } from "./jobhome/jobs.component";
import { JobpostComponent } from "./jobpost/jobpost.component";

const routes: Routes = [
    {path: '', redirectTo:'jobindex', pathMatch:'full'},
    {path: 'jobindex', component: JobsComponent},
    {path: 'jobpost', component: JobpostComponent},
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