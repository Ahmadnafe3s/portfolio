import { RouterModule, Routes } from "@angular/router";
import { WrapperComponent } from "./wrapper/wrapper.component";
import { NgModule } from "@angular/core";
import { eManagementComponent } from "./project/E-Management/e-managemnet.component";
import { HomeNeedsComponent } from "./project/homeneeds/homeneeds.component";
import { NextjsHomeNeedsComponent } from "./project/nextjs-homeneeds/nextjs-homeneeds.component";

const routes: Routes = [
    { path: "", component: WrapperComponent },
    { path: "e-management", component: eManagementComponent },
    { path: "homeneeds", component: HomeNeedsComponent },
    { path: "nextjs-homeneeds", component: NextjsHomeNeedsComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class routerModule { }