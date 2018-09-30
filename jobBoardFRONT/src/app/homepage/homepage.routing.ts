import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomepageComponent } from "./homepage.component";
import { HomeAuthResolver } from "./home-auth-resolver.service";

const routes: Routes = [
    {path: '', 
    component: HomepageComponent,
    resolve: {
        isAuthenticated: HomeAuthResolver
    }

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
export class HomepageRouterModule{}