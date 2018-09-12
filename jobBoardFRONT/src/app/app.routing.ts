import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";

const routes: Routes = [
    {path: '', redirectTo:'/index', pathMatch:'full'},
    {path: 'index', component: HomepageComponent},
    {path: 'footer', component: FooterComponent},
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