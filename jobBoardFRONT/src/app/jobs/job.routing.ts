import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { JobsComponent } from "./jobhome/jobs.component";
import { JobpostComponent } from "./jobpost/jobpost.component";
import { AuthGuard } from "../auth/auth.service";
import { JoblistComponent } from "./jobpost/joblist/joblist.component";
import { JobpreviewComponent } from "./jobpost/joblist/joblisting/jobpreview/jobpreview.component";

const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'jobindex', component: JobsComponent },
            { path: 'postjob', canActivate: [AuthGuard], component: JobpostComponent },
            { path: 'user', loadChildren: '../users/users.module#UsersModule' },
            { path: 'preview', component: JobpreviewComponent },
            {path: ':jobId', component: JobpreviewComponent}
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
                    {path: ':jobTitle', component: JobpreviewComponent}
                ]

            },
            {path: ':jobId', component: JobpreviewComponent}
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