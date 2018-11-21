import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ContactusComponent } from "./contactus.component";

const routes: Routes = [
    {path: '', component: ContactusComponent},
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
    
})
export class ContactusRouterModule{}