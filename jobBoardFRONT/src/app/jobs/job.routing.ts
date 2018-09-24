import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { JobsComponent } from "./jobhome/jobs.component";
import { JobpostComponent } from "./jobpost/jobpost.component";

const routes: Routes = [
    {path: '',
    children: [
        {path: 'jobindex', component: JobsComponent},
        {path: 'postjob', component: JobpostComponent},
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