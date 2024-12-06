import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { eManagementComponent } from "./project/E-Management/e-managemnet.component";
import { HomeNeedsComponent } from "./project/homeneeds/homeneeds.component";
import { NextjsHomeNeedsComponent } from "./project/nextjs-homeneeds/nextjs-homeneeds.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
    { path: "", component: DashboardComponent },
    { path: "e-management", component: eManagementComponent },
    { path: "homeneeds", component: HomeNeedsComponent },
    { path: "nextjs-homeneeds", component: NextjsHomeNeedsComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class routerModule { }