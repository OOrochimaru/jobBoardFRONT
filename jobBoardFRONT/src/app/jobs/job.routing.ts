import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { JobsComponent } from "./jobhome/jobs.component";
import { JobpostComponent } from "./jobpost/jobpost.component";
import { AuthGuard } from "../auth/auth.service";
import { NoAuthGuard } from "../auth/no-auth.service";
import { JoblistComponent } from "./jobpost/joblist/joblist.component";
import { JobpreviewComponent } from "./jobpost/joblist/joblisting/jobpreview/jobpreview.component";
import { JobpreviewResolver } from "./jobpost/joblist/joblisting/jobpreview/jobpreview-resolver.service";
import { JobcandidateComponent } from "./jobpost/joblist/joblisting/jobcandidate/jobcandidate.component";
import { JobListComponent } from "../shared/job-list/job-list.component";

const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'jobindex', component: JobsComponent },
            { path: 'postjob', canActivate: [AuthGuard], component: JobpostComponent },
            { path: 'user', loadChildren: '../users/users.module#UsersModule' },
            { path: 'preview', component: JobpreviewComponent },
            {
                path: ':jobId',
                resolve: {
                    jobs: JobpreviewResolver
                }, component: JobpreviewComponent
            }
        ]
    },
    {
        path: ':jobId',
        children: [
            { path: 'candidatelist', component: JobcandidateComponent }
        ]
    },
    {
        path: ':username',

        children: [
            { path: 'jobindex', component: JobsComponent },
            { path: 'postjob', canActivate: [AuthGuard], component: JobpostComponent },
            { path: 'user', loadChildren: '../users/users.module#UsersModule' },
            { path: 'preview', component: JobpreviewComponent },
            {
                path: 'myjobs', canActivate: [AuthGuard],

                children: [
                    { path: '', component: JoblistComponent },
                    { path: ':jobTitle', component: JobpreviewComponent }
                ]

            },
            {
                path: ':jobId',
                resolve: {
                    jobs: JobpreviewResolver
                },
                children:[
                    {path: '',  component: JobpreviewComponent},
                    {path: 'shortListed', canActivate: [AuthGuard], component:  JobListComponent}
                ],
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]

})
export class JobRouterMoudle { }